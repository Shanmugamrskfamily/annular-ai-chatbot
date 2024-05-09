import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUploadingComponent from '../Components/FileHandlingComponents/FileUploadingComponent';
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import { Sidebar } from '../Components/UserComponents/Sidebar';
import MoreOptions from '../Components/UserComponents/MoreOptions';
import PromptComponent from '../Components/ChatComponents/PromptComponent';
import { addTalkEaseConversation } from '../Redux/Slicers/ConversationSlice';
import { pushDocConnect } from '../Redux/Slicers/AdminSlice';

function DocConnect() {
    const conversations = useSelector(state => state.conversations.talkEaseConversation);
    let [sidebar, setSidebar] = useState('block');
    let [showSide, setShowSide] = useState('hidden');
    const conversationContainerRef = useRef(null);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState('upload');
    const [files, setFiles] = useState([]);
    const filesinRedux = useSelector(state => state.adminControlls.docConnect.files);
    useEffect(() => {
        console.log('Files in Redux:', filesinRedux);
    }, [files])
    console.log('Files in Redux:', filesinRedux);

    const handleSubmit = (inputValue) => {
        dispatch(addTalkEaseConversation(inputValue));
        scrollToBottom();
    };

    const handlesideBarClosed = () => {
        setSidebar(sidebar === 'block' ? 'hidden' : 'block');
        setShowSide(showSide === 'block' ? 'hidden' : 'block');
    }

    const scrollToBottom = () => {
        if (conversationContainerRef.current) {
            conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversations]);

    const handleFilesAdded = (data) => {
        setFiles((prevFiles) => [...prevFiles, ...data.map(file => file.name)]);
        console.log('Files:', data);
    }

    const handleUploadFiles = () => {
        dispatch(pushDocConnect(files));
        console.log('Uploading Files:', files);
    }

    const handleOptionChange = (event) => {
        setSelectedModule(event.target.value);
    };

    const handleFileSelection = (event) => {
        const selectedFile = event.target.value;
        setFiles(prevFiles => [...prevFiles, selectedFile]);
    };

    const handleRemoveFile = (fileToRemove) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
    };

    return (
        <div className='flex w-screen h-screen'>
            <BarsArrowDownIcon className={`h-8 w-8 cursor-pointer top-0 left-0 ${showSide}`} onClick={handlesideBarClosed} />
            <div className={`${sidebar} w-[18%] h-full`}>
                <Sidebar sideBardClosed={handlesideBarClosed} />
            </div>
            <div className='flex-1 h-full w-[82%] p-2'>
                <MoreOptions />
                <div className='h-full w-[100%] justify-between'>
                    <div className="w-full h-[85%] overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }} ref={conversationContainerRef}>
                        <h1 className='text-3xl font-bold'>Annular AI</h1>
                        <p className='mt-5 mb-5'>Document Q&A with AI</p>
                        <div className='w-full flex mb-10'>
                            <label className=' mr-20'>
                                <input
                                    type="radio"
                                    value="upload"
                                    checked={selectedModule === 'upload'}
                                    onChange={handleOptionChange}
                                    className='m-2'
                                />
                                Upload files
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Q&A"
                                    checked={selectedModule === 'Q&A'}
                                    onChange={handleOptionChange}
                                    className='m-2'
                                />
                                Q&A
                            </label>
                        </div>

                        {selectedModule === 'upload' ? (
                            <div className='flex flex-col'>
                                <FileUploadingComponent allowedFileTypes='.doc,.docx,.pdf,.txt,.xls,.xlsx' maxFileSize='200MB' onFileUpload={handleFilesAdded} />
                                <div>
                                    <button className='justify-start bg-blue-500 hover:bg-blue-700 text-white font-bold mb-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                        onClick={handleUploadFiles}>Upload</button>
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                        {selectedModule === 'Q&A'?(
                            <div className='w-full'>
                                <p className='text-center text-2xl'>Hai</p>
                            </div>
                        ):(null)}
                        {selectedModule==='Q&A'?(
                            <div className="w-full mx-auto bg-white rounded-lg overflow-hidden">
                            <div className="px-4 py-2">
                                {conversations && conversations.map((conversation, i) => (
                                <div key={i}>
                                {conversation.user && conversation.user.map((user, index) => (
                                    <div key={index} className="flex">
                                    <div className="rounded-md bg-blue-50 px-3 py-2 mb-2">
                                        <p className='flex gap-2'><span className="material-icons orange600">face</span><span dangerouslySetInnerHTML={{ __html: user }}></span></p>
                                    </div>
                                    </div>
                                ))}
                                {conversation.ai && conversation.ai.map((ai, index) => (
                                    <div key={index} className="flex justify-between">
                                    <div className=" bg-gray-50 rounded-md px-3 py-2 mb-2">
                                        <p className='flex gap-2'><span className="material-icons orange600">smart_toy</span><span dangerouslySetInnerHTML={{ __html: ai }}></span></p>
                                    </div>
                                    </div>
                                ))}
                                </div>
                                ))}
                            </div>
                        </div>
                        ):(null)}
                        
                    </div>
                    {selectedModule==='Q&A'?(
                        <div className='w-full h-[15%] items-center justify-center p-2'>
                        <PromptComponent onSubmit={handleSubmit} placeholder='Enter your query here...' isAttachment={false}/>
                        <p className='text-center mt-2'>Annular Chat AI ©Annular Technologies</p>
                    </div>
                    ):(null)}
                </div>
            </div>
        </div>
    )
}

export default DocConnect;

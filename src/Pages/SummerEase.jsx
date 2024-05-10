import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FileUploadingComponent from '../Components/FileHandlingComponents/FileUploadingComponent';
import {BarsArrowDownIcon} from "@heroicons/react/24/solid";
import { Sidebar } from '../Components/UserComponents/Sidebar';
import MoreOptions from '../Components/UserComponents/MoreOptions';
import PromptComponent from '../Components/ChatComponents/PromptComponent';
import { addTalkEaseConversation } from '../Redux/Slicers/ConversationSlice';

function SummerEase() {
    const conversations = useSelector(state => state.conversations.talkEaseConversation);
    let [sidebar,setSidebar]=useState('block');
    let [showSide,setShowSide]=useState('hidden');
    const conversationContainerRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (inputValue) => {
        dispatch(addTalkEaseConversation(inputValue));
        scrollToBottom();
      };

      const handlesideBarClosed=()=>{
        setSidebar(sidebar==='block'?'hidden':'block');
        setShowSide(showSide==='block'?'hidden':'block');
      }
    
      const scrollToBottom = () => {
        if (conversationContainerRef.current) {
          conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
        }
      };

      useEffect(() => {
        scrollToBottom();
      }, [conversations]);

const handleUpload=(data)=>{
    console.log(data);
}
  return (
    <div className='flex w-screen h-screen'>
        <BarsArrowDownIcon className={`h-8 w-8 cursor-pointer top-0 left-0 ${showSide}`} onClick={handlesideBarClosed} /> 
        <div className={`${sidebar} w-[18%] h-full`}>
            <Sidebar sideBardClosed={handlesideBarClosed}/>
        </div>
        <div className='flex-1 h-full w-[82%] p-2'>
            <MoreOptions/>
            <div className='h-full w-[100%] justify-between'>
                <div className="w-full h-[85%] overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }} ref={conversationContainerRef}>
                    <h1 className='text-3xl font-bold'>Annular AI</h1>
                    <p>Upload Your Files</p>
                    <FileUploadingComponent allowedFileTypes='.doc,.docx,.pdf,.txt,.xls,.xlsx' maxFileSize='200MB' onFileUpload={handleUpload}/>
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
                </div>

                
                <div className='w-full h-[15%] items-center justify-center p-2'>
                    <p>Enter context for summarization:</p>
                    <PromptComponent onSubmit={handleSubmit} placeholder='Write comprehensive summary of the text..' isAttachment={false}/>
                    <p className='text-center mt-2'>Annular Chat AI ©Annular Technologies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SummerEase;

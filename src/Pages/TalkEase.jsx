import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTalkEaseConversation } from '../Redux/Slicers/ConversationSlice';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import PromptComponent from '../Components/ChatComponents/PromptComponent';

function TalkEase() {
  const conversations = useSelector(state => state.conversations.talkEaseConversation);
  const dispatch = useDispatch();
  let [prompt,setPrompt]=useState('w-3/4 right-2');
  let [main,setMain]=useState('ml-[19rem]');
  let [sidebar,setSidebar]=useState('w-[18%] h-full')

  
  // Ref for scrolling to bottom
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  const handleSubmit = (inputValue) => {
    dispatch(addTalkEaseConversation(inputValue));
  };

  const handlesideBarClosed=()=>{
    setPrompt(prompt==='w-3/4 right-2'?'w-11/12 right-10':'w-3/4 right-2');
    setMain(main==='ml-[19rem]'?'ml-[3rem]':'ml-[19rem]');
    setSidebar(sidebar==='w-[18%] h-full'?'':'w-[18%] h-full')
  }

  return (
    <div className='flex w-full h-full'>
      <div className={`${sidebar} fixed`}>
        <Sidebar sideBardClosed={handlesideBarClosed}/>
      </div>
      <div className={`flex-1 ${main} right- h-full w-[100%] p-10`}>
        <div className='h-[90%] w-full justify-between overflow-y-auto'>
          <h1 className='text-3xl font-bold'>Annular AI</h1>
          <h1 className="font-bold text-lg">TalkEase Conversation</h1>
          <div className="w-full mx-auto bg-white rounded-lg overflow-hidden mb-32">
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
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed bottom-0 items-center justify-center ${prompt}`}>
        <PromptComponent onSubmit={handleSubmit}/>
        <p className='text-center  mb-2 mt-2'>Annular Chat AI ©Annular Technologies</p>
      </div>
    </div>
  );
}

export default TalkEase;

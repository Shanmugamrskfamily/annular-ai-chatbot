import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTalkEaseConversation } from '../Redux/Slicers/ConversationSlice';
import { Sidebar } from '../Components/UserComponents/Sidebar';
import PromptComponent from '../Components/ChatComponents/PromptComponent';

function TalkEase() {
  const conversations = useSelector(state => state.conversations.talkEaseConversation);
  const dispatch = useDispatch();

  const handleSubmit = (inputValue) => {
    dispatch(addTalkEaseConversation(inputValue));
  };

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1 ml-8 flex-col mr-5 container overflow-y-auto talkEase-container'>
        <h1 className='text-3xl font-bold'>Annular AI</h1>
        <h1 className="font-bold text-lg">TalkEase Conversation</h1>
        
        <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-32">
          <div className="px-4 py-2">
            {conversations && conversations.map((conversation, i) => (
              <div key={i}>
                {conversation.user && conversation.user.map((user, index) => (
                  <div key={index} className="flex">
                    <div className="rounded-md bg-blue-100 px-3 py-2 mb-2">
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
        <div className="fixed bottom-0 w-3/4">
          <PromptComponent onSubmit={handleSubmit}/>
        </div>
        </div>
    </div>
  );
}

export default TalkEase;

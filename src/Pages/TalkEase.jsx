import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserIcon } from "@heroicons/react/24/solid";
import ConversationPrompt from '../Components/UserComponents/ConversationPrompt';
import { addTalkEaseConversation } from '../Redux/Slicers/ConversationSlice';

function TalkEase() {
  const conversations = useSelector(state => state.conversations.talkEaseConversation);
  const dispatch=useDispatch();
  console.log('conversation:', conversations);

  const handleSendMessage= (message) => {
    dispatch(addTalkEaseConversation(message));
  };

  return (
    <div className='flex ml-5 flex-col mr-5 mt-32'>
      <h1 className='text-3xl font-bold'>Annular AI</h1>
      <h1 className="font-bold text-lg">TalkEase Conversation</h1>
      <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-32">
        <div className="px-4 py-2">
          <div  className="flex">
              <div className="rounded-md px-3 py-2 mb-2">
                  <p className='flex gap-2'><span className="material-icons orange600">smart_toy</span>How may I assist you today?</p>
                </div>
          </div>
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
      <div className="fixed bottom-0 w-3/4 p-2">
        <ConversationPrompt placeholderText={'Your message...'} onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}

export default TalkEase;

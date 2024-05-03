import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  talkEaseConversation: [{user:[`<p>What is React JS?</p>`]},{ai:[`<p>
  React JS is a popular open-source JavaScript library used for building user interfaces, particularly for single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes.
  <br/>
  React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies. It's known for its flexibility and performance, and it introduced a component-based architecture that has since been adopted by many other frameworks and libraries.
  </p>`]}],
};

const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        addTalkEaseConversation: (state, action) => {
            console.log('action: ',action);
          state.talkEaseConversation.push({user:[action.payload.user],ai:[`<p>This is Random Response from AI</p>`]});
        }      
      }
  });
  

export const { getTalkEaseConversation,addTalkEaseConversation } = conversationSlice.actions;
export default conversationSlice.reducer;

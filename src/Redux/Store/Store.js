import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slicers/UserSlice';
import sidebarReducer from "../Slicers/SidebarSlice";
import conversationReducer from '../Slicers/ConversationSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    sidebarItems: sidebarReducer,
    conversations: conversationReducer
  }
});


export default store;

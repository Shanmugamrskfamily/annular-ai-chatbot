import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slicers/UserSlice';
import sidebarReducer from "../Slicers/SidebarSlice";
import conversationReducer from '../Slicers/ConversationSlice'
import adminReducer from '../Slicers/AdminSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    sidebarItems: sidebarReducer,
    conversations: conversationReducer,
    adminControlls: adminReducer
  }
});


export default store;

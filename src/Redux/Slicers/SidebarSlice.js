import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuMainOptions: [],
  menuSubOptions:[]
};

const sidebarSlice = createSlice({
    name: 'sidebarItems',
    initialState,
    reducers: {
      userMainMenu: (state, action) => {
        if (action.payload=== 'user') {
          state.menuMainOptions = [['TalkEase','/talk-ease'], ['SummarEase','/summerease'],['DocConnect','/doc-connect'],
          ['Web Seach','/web-search'],['Ask Annular','/ask-annular'],['Search and Chat(Pilot)','/search-and-chat']];
        }
      },
      userSubMenu: (state, action) => {
        if (action.payload=== 'user') {
          state.menuSubOptions = [['Chat Session 1','/session-1'],['Chat Session 2','/session-2'],['Chat Session 3','/session-3']];
        }
      },
      adminMainMenu: (state, action) => {
        if (action.payload=== 'admin') {
          state.menuMainOptions = [['Manage Users','/manage-users'],['TalkEase','/talk-ease'], ['SummarEase','/summerease'],['DocConnect','/doc-connect'],
          ['Web Seach','/web-search'],['Ask Annular','/ask-annular'],['Search and Chat(Pilot)','/search-and-chat']];
        }
      },
      adminSubMenu: (state, action) => {
        if (action.payload=== 'admin') {
          state.menuSubOptions = [['Chat Session 1','/session-1'],['Chat Session 2','/session-2'],['Chat Session 3','/session-3']];;
        }
      }
    }
  });
  

export const { userMainMenu,userSubMenu,adminMainMenu,adminSubMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;

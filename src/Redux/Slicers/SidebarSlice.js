import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuMainOptions: [],
  menuSubOptions:[]
};

const sidebarSlice = createSlice({
    name: 'sidebarItems',
    initialState,
    reducers: {
      userMainMenu: (state, userRole) => {
        if (userRole.payload=== 'user') {
          state.menuMainOptions = ['Home', 'TalkEase', 'SummarEase', 'DocConnect', 'Web Seach', 'Ask Annular', 'Search and Chat(Pilot)'];
        }
      },
      userSubMenu: (state, userRole) => {
        if (userRole.payload=== 'user') {
          state.menuSubOptions = ['Chat Session 1', 'Chat Session 2', 'Chat Session 3'];
        }
      },
      adminMainMenu: (state, userRole) => {
        if (userRole.payload=== 'admin') {
          state.menuMainOptions = ['Home', 'TalkEase', 'SummarEase', 'DocConnect', 'Web Seach', 'Ask Annular', 'Search and Chat(Pilot)'];
        }
      },
      adminSubMenu: (state, userRole) => {
        if (userRole.payload=== 'admin') {
          state.menuSubOptions = ['Chat Session 1', 'Chat Session 2', 'Chat Session 3'];
        }
      }
    }
  });
  

export const { userMainMenu,userSubMenu,adminMainMenu,adminSubMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;

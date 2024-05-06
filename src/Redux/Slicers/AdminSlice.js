import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUsersData:[{
    "name": ["Michael Johnson"],
    "userName": ["michael_johnson"],
    "email": ["michael@example.com"],
    "mobileNum": ["4567890123"],
    'organisation':['Toyota'],
    'jobTitle':['Engineer'],
    "lastLogin": ["2023-05-03 11:45:00"],
  },
  {
    "name": ["Emily Brown"],
    "userName": ["emily_brown"],
    "email": ["emily@example.com"],
    "mobileNum": ["7890123456"],
    'organisation':['Hundai'],
    'jobTitle':['SCM-Executive'],
    "lastLogin": ["2023-05-03 11:45:00"],
  },
  {
    "name": ["David Wilson"],
    "userName": ["david_wilson"],
    "email": ["david@example.com"],
    "mobileNum": ["2345678901"],
    'organisation':['Ashokleyland'],
    'jobTitle':['SAP-Support Engineer'],
    "lastLogin": ["2023-05-03 11:45:00"],
  },
  {
    "name": ["Sarah Martinez"],
    "userName": ["sarah_martinez"],
    "email": ["sarah@example.com"],
    "mobileNum": ["8901234567"],
    'organisation':['RMK Group of Eductaions'],
    'jobTitle':['HOD-Mathemetics'],
    "lastLogin": ["2023-05-03 11:45:00"],
  },
  {
    "name": ["Christopher Lee"],
    "userName": ["christopher_lee"],
    "email": ["chris@example.com"],
    "mobileNum": ["3456789012"],
    'organisation':['Xiomi'],
    'jobTitle':['Data Analyst'],
    "lastLogin": ["2023-05-03 11:45:00"],
  }  ],
  user:[],
  pendingUsers:[
    {
      "name": ["Olivia Jones"],
      "userName": ["olivia_j_24"],
      "email": ["olivia.jones@acme.com"],
      "mobileNum": ["9871234560"],
      "organisation": ["Acme Inc."],
      "jobTitle": ["Marketing Manager"],
      "Requested On": "2024-05-07 14:00:00"
    },
    {
      "name": ["William Garcia"],
      "userName": ["williamg_dev"],
      "email": ["william.garcia@xyzcorp.net"],
      "mobileNum": ["1234567890"],
      "organisation": ["XYZ Corporation"],
      "jobTitle": ["Software Developer"],
      "Requested On": "2024-05-07 14:00:00"
    },
    {
      "name": ["Isabella Moore"],
      "userName": ["isabella_moore"],
      "email": ["isabella.moore@hospital.org"],
      "mobileNum": ["5678901234"],
      "organisation": ["City General Hospital"],
      "jobTitle": ["Registered Nurse"],
      "Requested On": "2024-05-07 14:00:00"
    },
    {
      "name": ["Noah Anderson"],
      "userName": ["noah_a_pilot"],
      "email": ["noah.anderson@skyways.aero"],
      "mobileNum": ["6789012345"],
      "organisation": ["Skyways Airlines"],
      "jobTitle": ["Pilot"],
      "Requested On": "2024-05-07 14:00:00"
    },
    {
      "name": ["Sophia Miller"],
      "userName": ["sophia_m_teacher"],
      "email": ["sophia.miller@school.edu"],
      "mobileNum": ["8901234567"],
      "organisation": ["Central High School"],
      "jobTitle": ["Teacher"],
      "lastLogin": "2024-05-07 14:00:00"
    }
  ]  
};

const adminSlice= createSlice({
    name: 'adminControlls',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            console.log('action: ',action);
            
        },
        getUserData:(state,action)=>{
                if(action.payload.userRole='admin'){
                    state.user.push({user:action.payload.user,userData:{date:'',session}})
                }
            }
      }
  });
  

export const { getUsers } = adminSlice.actions;
export default adminSlice.reducer;

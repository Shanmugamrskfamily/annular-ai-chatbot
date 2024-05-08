import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUsersData:[{
    "name": "Michael Johnson",
    "userName": "michael_johnson",
    "email": "michael@example.com",
    "mobileNum": "4567890123",
    'organisation':'Toyota',
    'jobTitle':'Engineer',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Emily Brown",
    "userName": "emily_brown",
    "email": "emily@example.com",
    "mobileNum": "7890123456",
    'organisation':'Hundai',
    'jobTitle':'SCM-Executive',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "David Wilson",
    "userName": "david_wilson",
    "email": "david@example.com",
    "mobileNum": "2345678901",
    'organisation':'Ashokleyland',
    'jobTitle':'SAP-Support Engineer',
    'role':'admin',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Sarah Martinez",
    "userName": "sarah_martinez",
    "email": "sarah@example.com",
    "mobileNum": "8901234567",
    'organisation':'RMK Group of Eductaions',
    'jobTitle':'HOD-Mathemetics',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Christopher Lee",
    "userName": "christopher_lee",
    "email": "chris@example.com",
    "mobileNum": "3456789012",
    'organisation':'Xiomi',
    'jobTitle':'Data Analyst',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Michael Johnson",
    "userName": "michael_johnson",
    "email": "michael@example.com",
    "mobileNum": "4567890123",
    'organisation':'Toyota',
    'jobTitle':'Engineer',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Emily Brown",
    "userName": "emily_brown",
    "email": "emily@example.com",
    "mobileNum": "7890123456",
    'organisation':'Hundai',
    'jobTitle':'SCM-Executive',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "David Wilson",
    "userName": "david_wilson",
    "email": "david@example.com",
    "mobileNum": "2345678901",
    'organisation':'Ashokleyland',
    'jobTitle':'SAP-Support Engineer',
    'role':'admin',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Sarah Martinez",
    "userName": "sarah_martinez",
    "email": "sarah@example.com",
    "mobileNum": "8901234567",
    'organisation':'RMK Group of Eductaions',
    'jobTitle':'HOD-Mathemetics',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Christopher Lee",
    "userName": "christopher_lee",
    "email": "chris@example.com",
    "mobileNum": "3456789012",
    'organisation':'Xiomi',
    'jobTitle':'Data Analyst',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Michael Johnson",
    "userName": "michael_johnson",
    "email": "michael@example.com",
    "mobileNum": "4567890123",
    'organisation':'Toyota',
    'jobTitle':'Engineer',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Emily Brown",
    "userName": "emily_brown",
    "email": "emily@example.com",
    "mobileNum": "7890123456",
    'organisation':'Hundai',
    'jobTitle':'SCM-Executive',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "David Wilson",
    "userName": "david_wilson",
    "email": "david@example.com",
    "mobileNum": "2345678901",
    'organisation':'Ashokleyland',
    'jobTitle':'SAP-Support Engineer',
    'role':'admin',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Sarah Martinez",
    "userName": "sarah_martinez",
    "email": "sarah@example.com",
    "mobileNum": "8901234567",
    'organisation':'RMK Group of Eductaions',
    'jobTitle':'HOD-Mathemetics',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  },
  {
    "name": "Christopher Lee",
    "userName": "christopher_lee",
    "email": "chris@example.com",
    "mobileNum": "3456789012",
    'organisation':'Xiomi',
    'jobTitle':'Data Analyst',
    'role':'user',
    "lastLogin": "2023-05-03 11:45:00",
  }]  ,
  user:[],
  pendingUsers:[
    {
      "name": "Olivia Jones",
      "userName": "olivia_j_24",
      "email": "olivia.jones@acme.com",
      "mobileNum": "9871234560",
      "organisation": "Acme Inc.",
      "jobTitle": "Marketing Manager",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "William Garcia",
      "userName": "williamg_dev",
      "email": "william.garcia@xyzcorp.net",
      "mobileNum": "1234567890",
      "organisation": "XYZ Corporation",
      "jobTitle": "Software Developer",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Isabella Moore",
      "userName": "isabella_moore",
      "email": "isabella.moore@hospital.org",
      "mobileNum": "5678901234",
      "organisation": "City General Hospital",
      "jobTitle": "Registered Nurse",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Noah Anderson",
      "userName": "noah_a_pilot",
      "email": "noah.anderson@skyways.aero",
      "mobileNum": "6789012345",
      "organisation": "Skyways Airlines",
      "jobTitle": "Pilot",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Sophia Miller",
      "userName": "sophia_m_teacher",
      "email": "sophia.miller@school.edu",
      "mobileNum": "8901234567",
      "organisation": "Central High School",
      "jobTitle": "Teacher",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Olivia Jones",
      "userName": "olivia_j_24",
      "email": "olivia.jones@acme.com",
      "mobileNum": "9871234560",
      "organisation": "Acme Inc.",
      "jobTitle": "Marketing Manager",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "William Garcia",
      "userName": "williamg_dev",
      "email": "william.garcia@xyzcorp.net",
      "mobileNum": "1234567890",
      "organisation": "XYZ Corporation",
      "jobTitle": "Software Developer",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Isabella Moore",
      "userName": "isabella_moore",
      "email": "isabella.moore@hospital.org",
      "mobileNum": "5678901234",
      "organisation": "City General Hospital",
      "jobTitle": "Registered Nurse",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Noah Anderson",
      "userName": "noah_a_pilot",
      "email": "noah.anderson@skyways.aero",
      "mobileNum": "6789012345",
      "organisation": "Skyways Airlines",
      "jobTitle": "Pilot",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Sophia Miller",
      "userName": "sophia_m_teacher",
      "email": "sophia.miller@school.edu",
      "mobileNum": "8901234567",
      "organisation": "Central High School",
      "jobTitle": "Teacher",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Olivia Jones",
      "userName": "olivia_j_24",
      "email": "olivia.jones@acme.com",
      "mobileNum": "9871234560",
      "organisation": "Acme Inc.",
      "jobTitle": "Marketing Manager",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "William Garcia",
      "userName": "williamg_dev",
      "email": "william.garcia@xyzcorp.net",
      "mobileNum": "1234567890",
      "organisation": "XYZ Corporation",
      "jobTitle": "Software Developer",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Isabella Moore",
      "userName": "isabella_moore",
      "email": "isabella.moore@hospital.org",
      "mobileNum": "5678901234",
      "organisation": "City General Hospital",
      "jobTitle": "Registered Nurse",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Noah Anderson",
      "userName": "noah_a_pilot",
      "email": "noah.anderson@skyways.aero",
      "mobileNum": "6789012345",
      "organisation": "Skyways Airlines",
      "jobTitle": "Pilot",
      "requestedOn": "2024-05-07 14:00:00"
    },
    {
      "name": "Sophia Miller",
      "userName": "sophia_m_teacher",
      "email": "sophia.miller@school.edu",
      "mobileNum": "8901234567",
      "organisation": "Central High School",
      "jobTitle": "Teacher",
      "requestedOn": "2024-05-07 14:00:00"
    }],
    userLog:[
    {
    "name": "Michael Johnson",
    "userName": "michael_johnson",
    "email": "michael@example.com",
    "mobileNum": "4567890123",
    'organisation':'Toyota',
    'jobTitle':'Engineer',
    'role':'user',
    'sessonDetails':[
    {'start':'2023-05-03 11:45:00','end':'2023-05-03 13:45:00','sessionDuration':'02:00:10'},
    {'start':'2023-05-02 06:00:00','end':'2023-05-02 10:45:00','sessionDuration':'04:45:08'},
    {'start':'2023-05-01 07:15:00','end':'2023-05-01 10:20:00','sessionDuration':'04:05:20'},
    {'start':'2023-04-30 22:15:00','end':'2023-05-01 03:15:00','sessionDuration':'05:00:12'},
    {'start':'2023-04-30 10:15:00','end':'2023-04-30 13:15:00','sessionDuration':'05:00:18'},
    {'start':'2023-05-03 11:45:00','end':'2023-05-03 13:45:00','sessionDuration':'02:00:10'},
    {'start':'2023-05-02 06:00:00','end':'2023-05-02 10:45:00','sessionDuration':'04:45:08'},
    {'start':'2023-05-01 07:15:00','end':'2023-05-01 10:20:00','sessionDuration':'04:05:20'},
    {'start':'2023-04-30 22:15:00','end':'2023-05-01 03:15:00','sessionDuration':'05:00:12'},
    {'start':'2023-04-30 10:15:00','end':'2023-04-30 13:15:00','sessionDuration':'05:00:18'},
    {'start':'2023-05-03 11:45:00','end':'2023-05-03 13:45:00','sessionDuration':'02:00:10'},
    {'start':'2023-05-02 06:00:00','end':'2023-05-02 10:45:00','sessionDuration':'04:45:08'},
    {'start':'2023-05-01 07:15:00','end':'2023-05-01 10:20:00','sessionDuration':'04:05:20'},
    {'start':'2023-04-30 22:15:00','end':'2023-05-01 03:15:00','sessionDuration':'05:00:12'},
    {'start':'2023-04-30 10:15:00','end':'2023-04-30 13:15:00','sessionDuration':'05:00:18'},
    {'start':'2023-05-03 11:45:00','end':'2023-05-03 13:45:00','sessionDuration':'02:00:10'},
    {'start':'2023-05-02 06:00:00','end':'2023-05-02 10:45:00','sessionDuration':'04:45:08'},
    {'start':'2023-05-01 07:15:00','end':'2023-05-01 10:20:00','sessionDuration':'04:05:20'},
    {'start':'2023-04-30 22:15:00','end':'2023-05-01 03:15:00','sessionDuration':'05:00:12'},
    {'start':'2023-04-30 10:15:00','end':'2023-04-30 13:15:00','sessionDuration':'05:00:18'},
    ]
  }] 
};

const adminSlice= createSlice({
    name: 'adminControlls',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            console.log('action: ',action);
            
        },
        getPendingUsers:(state,action)=>{
          console.log('Action: ',action);
        }
      }
  });
  

export const { getUsers,getPendingUsers } = adminSlice.actions;
export default adminSlice.reducer;

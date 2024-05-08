import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  PlusIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminMainMenu, adminSubMenu, userMainMenu, userSubMenu } from "../../Redux/Slicers/SidebarSlice";
 
export function Sidebar(props) {
  

  const handleShowSidebar = () => {
    props.sideBardClosed(true);
  }

  let menuMainItems = useSelector(state => state.sidebarItems.menuMainOptions);
  let menuSubItems = useSelector(state => state.sidebarItems.menuSubOptions);
  


  const dispatch=useDispatch();
  useEffect(() => {
    let userRole = localStorage.getItem('userRole');
    if (userRole === 'user') {
      dispatch(userMainMenu(userRole));
      dispatch(userSubMenu(userRole));
    } else if (userRole === 'admin') {
      dispatch(adminMainMenu(userRole));
      dispatch(adminSubMenu(userRole));
    }
  }, [dispatch]);
  

  return (
    <>
        <div className="w-full h-full shadow-md">
          <div className='mb-2 h-[14%] flex p-1 justify-center'>
              <img src="./images/logo.png" alt="brand" className="h-30 w-40" />
              <XMarkIcon className='h-8 w-8 cursor-pointer ml-8' onClick={handleShowSidebar} />
          </div>
          <Card className={` h-[42%] w-full overflow-y-auto p-2 shadow-xl shadow-blue-gray-900/5 dark:bg-black dark:text-white`}>
            <List>
              {menuMainItems ? menuMainItems.map((item, i) => (
                <Link key={i} to={item[1]}>
                <ListItem className="p-0 py-1 dark:text-white" key={i}>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    {item[0]}
                  </Typography>
                </ListItem>
                </Link>
              )) : null}
            </List>
            <hr className="my-2 border-blue-gray-50"/>
            </Card>
            <Card className={`overflow-y-auto h-[44%] w-full p-1 shadow-xl shadow-blue-gray-900/5 dark:bg-black dark:text-white`}>
            <List>
            <ListItem className="dark:text-white">
                New Chat
                  <ListItemSuffix>
                    <PlusIcon  className="h-6 w-6" />
                  </ListItemSuffix>
                </ListItem>
              </List>
            <List>
              {menuSubItems ? menuSubItems.map((item, i) => (
                <ListItem key={i}>
                  {item[0]}
                  <ListItemSuffix>
                    <EllipsisHorizontalIcon className="h-5 w-5 hover:bg-blue-gray-600 rounded-full dark:hover:bg-white" />
                  </ListItemSuffix>
                </ListItem>
                
              )) : null}
            </List>
            </Card>
          </div>
          </>
  );
}
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarMain() {
  const [navItem, setNavItem] = useState('Signup');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setNavItem('Signup');
    } else if (location.pathname === '/signup') {
      setNavItem('Login');
    }
  }, [location]);

  return (
    <>
      {(location.pathname === '/' || location.pathname === '/signup' || location.pathname.startsWith('/email-verification')) ? (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5  text-2xl font-bold"
            >
              <div className="flex">
                <img src="/images/logo.png" alt="Logo" className="h-12 w-20" />
                <span className="ml-2 justify-center mt-3">Annular AI</span>
              </div>
            </Typography>
            <div className="flex-end items-center gap-4">
              <Link to={navItem === 'Login' ? '/' : '/signup'}>
                <Button
                  variant="text"
                  size="sm"
                  className="inline-block"
                >
                  <span className="underline text-blue-600 font-bold">{navItem}</span>
                </Button>
              </Link>
            </div>
          </div>
        </Navbar>
      ) : (
        null
      )}
    </>
  );
}

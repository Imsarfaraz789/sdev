"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SignIn from "../auth/signin/page";
import SignUp from "../auth/signup/page";
import SearchModal from "../search/page";
import { useAuth } from "@/app/context/AuthContext";
import AppDrawer from "./drawer/page";

const Navbar = React.memo(() => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
    setIsDrawerOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
    setIsDrawerOpen(false);
  };

  const handleSearchClick = () => setIsSearchModalOpen(true);
  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const handleCloseSearchModal = () => setIsSearchModalOpen(false);

  return (
    <>
      <nav className="w-full h-14 border-b bg-white">
        <div className="flex items-center justify-between h-full px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="flex items-center gap-4 w-full max-w-3xl">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo-no-background.png"
                alt="Logo"
                className="w-auto h-auto text-white bg-black rounded-md p-1"
                width={48}
                height={50}
                priority
              />
            </Link>
            <div className="hidden md:flex flex-grow">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="w-44 border rounded p-2 text-xl border-black "
                aria-label="Search"
                readOnly
                onClick={handleSearchClick}
              />
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            {isAuthenticated ? (
              <>
                {user === "admin" && (
                  <>
                    <Link
                      href="/"
                      className="p-2 rounded hover:underline hover:text-blue-800 hover:bg-blue-200"
                    >
                      Home Page
                    </Link>

                    <Link
                      href="/component/admin"
                      className="p-2 rounded hover:underline hover:text-blue-800 hover:bg-blue-200"
                    >
                      Admin Dashboard
                    </Link>
                  </>
                )}
                <button
                  onClick={logout}
                  className="p-2 rounded border hover:underline border-blue-800 hover:bg-blue-800 text-blue-800 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSignInClick}
                  className="p-2 rounded hover:underline hover:text-blue-800 hover:bg-blue-200"
                >
                  Log in
                </button>
                <button
                  onClick={handleSignUpClick}
                  className="p-2 rounded border hover:underline border-blue-800 hover:bg-blue-800 text-blue-800 hover:text-white"
                >
                  Create account
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleSearchClick}
              className="p-2 rounded hover:bg-gray-200 transition-colors duration-300"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10 5 5 0 010-10zM20 20l-4-4"
                />
              </svg>
            </button>

            {/* Drawer toggle button */}
            <button
              onClick={handleOpenDrawer}
              className="p-2 rounded hover:bg-gray-200 transition-colors duration-300 ml-2"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal for Sign In */}
      {isSignInModalOpen && (
        <SignIn onClose={() => setIsSignInModalOpen(false)} />
      )}

      {isSignUpModalOpen && (
        <SignUp onClose={() => setIsSignUpModalOpen(false)} />
      )}

      {isSearchModalOpen && <SearchModal onClose={handleCloseSearchModal} />}

      <AppDrawer
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSignIn={handleSignInClick}
        onSignUp={handleSignUpClick}
        isAuthenticated={isAuthenticated}
        logout={logout}
      />
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

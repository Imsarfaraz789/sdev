"use client";

import React, { useState } from "react";
import SignIn from "../auth/signin/page";
import SignUp from "../auth/signup/page";
import Link from "next/link";

const HomeLeft = React.memo(() => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInOpen = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpOpen = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleCloseModal = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className="flex flex-col w-full items-center p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 md:text-4xl lg:text-5xl">
          Welcome to SDEV Community 🚀
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
          A place where <span className="font-bold">amazing developers</span>{" "}
          unite, share insights, and grow their careers. 🌍💻
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="block w-full text-center rounded-lg bg-blue-700 text-white py-3 px-5 text-lg font-medium transition-transform duration-300 hover:bg-blue-600 hover:scale-105 transform active:scale-100 shadow-md"
            onClick={handleSignUpOpen}
          >
            Join the Community 🎉
          </button>
          <button
            className="block w-full text-center rounded-lg border border-gray-300 bg-gray-100 text-blue-700 py-3 px-5 text-lg font-medium transition-transform duration-300 hover:bg-gray-200 hover:scale-105 transform active:scale-100 shadow-sm"
            onClick={handleSignInOpen}
          >
            Already a member? Log In ✨
          </button>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md p-6">
        <div className="bg-blue-50 rounded-xl shadow-lg border border-blue-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Explore More
          </h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/component/contact"
              className="block text-blue-700 hover:text-blue-900 text-lg font-medium text-center py-2 px-4 rounded-lg transition-colors duration-300 bg-blue-100 hover:bg-blue-200"
            >
              Contact Us 📧
            </Link>
            <Link
              href="/component/about"
              className="block text-blue-700 hover:text-blue-900 text-lg font-medium text-center py-2 px-4 rounded-lg transition-colors duration-300 bg-blue-100 hover:bg-blue-200"
            >
              About Us 📖
            </Link>
            <Link
              href="/component/privacy"
              className="block text-blue-700 hover:text-blue-900 text-lg font-medium text-center py-2 px-4 rounded-lg transition-colors duration-300 bg-blue-100 hover:bg-blue-200"
            >
              Privacy Policy 🔒
            </Link>
          </div>
        </div>
      </div>

      {showSignIn && <SignIn onClose={handleCloseModal} />}
      {showSignUp && <SignUp onClose={handleCloseModal} />}
    </div>
  );
});

HomeLeft.displayName = "HomeLeft";

export default HomeLeft;

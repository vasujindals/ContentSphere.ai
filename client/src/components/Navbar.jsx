import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn, openUserProfile } = useClerk();

  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <img
        src={assets.logo}
        alt="logo"
        className="h-10 sm:h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {user ? (
        <div className="flex items-center gap-3">
          <UserButton />
          {/* Clickable text that opens the same profile modal */}
          <button
            onClick={() => openUserProfile()}
            className="hidden sm:inline-flex items-center rounded-full text-sm font-medium text-gray-800 hover:text-primary px-3 py-1.5 border border-gray-200 hover:border-primary/50"
          >
            Manage Profile
          </button>
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;

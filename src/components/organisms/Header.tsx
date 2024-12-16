import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { Navigation } from "../molecules/Navigation";
import AuthButtons from "../molecules/AuthButtons";
import { Button } from "../atoms/Button";
import { deleteCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("entre");
    deleteCredentials();
    navigate("/");
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <AuthButtons />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <a href="/" className="px-4 py-2 text-gray-600 hover:text-black">
                Home
              </a>
              <a className="px-4 py-2 text-gray-600 hover:text-black">Deals</a>
              <a className="px-4 py-2 text-gray-600 hover:text-black">
                New Arrivals
              </a>
              <a className="px-4 py-2 text-gray-600 hover:text-black">
                Packages
              </a>
              <div className="px-4 py-2 space-y-2">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
                <Button fullWidth onClick={() => handleSignUp()}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

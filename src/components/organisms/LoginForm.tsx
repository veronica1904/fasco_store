import { Button } from "../atoms/Button";
import { useState } from "react";
import { Input } from "../atoms/Input";
import loginImg from "../../assets/img/login_img.png";
import gmailIcon from "../../assets/img/icons/gmail_icon.png";
import googleIcon from "../../assets/img/icons/google_icon.png";
import { saveCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

interface SocialButtonProps {
  provider: "google" | "email";
  onClick?: () => void;
}

export const SocialButton = ({ provider }: SocialButtonProps) => {
  const providerConfig = {
    google: {
      icon: <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />,
      text: "Sign up with Google",
    },
    email: {
      icon: <img src={gmailIcon} alt="Email Icon" className="w-5 h-5" />,
      text: "Sign up with Email",
    },
  };

  const handleGoogleLogin = async () => {
    try {
      await alert("Logged in with Google under construction!");
    } catch (error) {
      console.error(error);
      alert("Error logging in with Google!");
    }
  };

  const handleGmailLogin = async () => {
    try {
      await alert("Logged in with Gmail under construction!");
    } catch (error) {
      console.error(error);
      alert("Error logging in with Google!");
    }
  };
  return (
    <Button
      variant="secondary"
      fullWidth
      onClick={provider === "google" ? handleGoogleLogin : handleGmailLogin}
      className="mb-2"
    >
      {providerConfig[provider].icon}
      {providerConfig[provider].text}
    </Button>
  );
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataLogin = { email, password };
    try {
      saveCredentials(dataLogin);
      navigate("/profile");
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <div className="flex w-full max-w-6xl flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={loginImg}
            alt="Login image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-4xl font-volkhov font-normal text-textTitle text-left leading-[52px]">
              FASCO
            </h1>
            <h2 className="text-xl font-volkhov mt-2 mb-6">Sign In To FASCO</h2>
          </div>

          <div className="flex justify-center gap-4">
            <SocialButton provider="google" />
            <SocialButton provider="email" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" fullWidth className="h-11">
              Sign In
            </Button>
          </form>

          <div className="text-center space-y-4">
            <button className="text-blue-500 hover:underline">
              Register Now
            </button>
            <div>
              <button className="text-blue-500 hover:underline">
                Forget Password?
              </button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <a href="#" className="hover:underline">
              FASCO Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

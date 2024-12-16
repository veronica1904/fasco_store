import gmailIcon from "../../assets/img/icons/gmail_icon.png";
import googleIcon from "../../assets/img/icons/google_icon.png";

interface SocialLoginButtonProps {
  provider: "google" | "email";
  onClick?: () => void;
}

export const SocialLoginButton = ({
  provider,
  onClick,
}: SocialLoginButtonProps) => {
  const config = {
    google: {
      icon: <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />,
      text: "Sign up with Google",
      className: "bg-white hover:bg-gray-50",
    },
    email: {
      icon: <img src={gmailIcon} alt="Email Icon" className="w-5 h-5 " />,
      text: "Sign up with Email",
      className: "bg-white hover:bg-gray-50 font-Poppins",
    },
  };

  const { icon, text, className } = config[provider];

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-borderButton rounded-lg text-gray-700 font-normal ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

import gmailIcon from "../../assets/img/icons/gmail_icon.png";
import googleIcon from "../../assets/img/icons/google_icon.png";
import { Button } from "../atoms/Button";

interface SocialButtonProps {
  provider: "google" | "email";
  onClick?: () => void;
}

export const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
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

  return (
    <Button
      variant="secondary"
      fullWidth
      onClick={onClick}
      className="flex items-center justify-center space-x-2 mb-2"
    >
      {providerConfig[provider].icon}
      <span>{providerConfig[provider].text}</span>
    </Button>
  );
};

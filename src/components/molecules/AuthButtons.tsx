import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import { deleteCredentials } from "../../store/slices/authSlice";

export default function AuthButtons() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    deleteCredentials();
    navigate("/");
  };

  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline" onClick={() => navigate("/login")}>
        Sign In
      </Button>
      <Button onClick={() => handleSignUp()}>Sign Ups</Button>
    </div>
  );
}

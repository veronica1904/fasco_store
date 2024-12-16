import { ProfileDetails } from "../components/organisms/ProfileDetails";

export const ProfilePage = () => {
  console.log("entre ala perfil");
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ProfileDetails />
    </div>
  );
};

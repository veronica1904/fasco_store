import { ProfileField } from "../atoms/ProfileField";
import { ProfileHeader } from "../molecules/ProfileHeader";
import { ProfileSection } from "../molecules/ProfileSection";
import { Button } from "../atoms/Button";
import { getCredentials } from "../../store/slices/authSlice";

export const ProfileDetails = () => {
  const dataUser = getCredentials();
  function getUsernameFromEmail(email: string) {
    const username = email.split("@")[0];
    return username || "No have Data";
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20">
      <div className="p-8">
        <ProfileHeader name={"juan"} />

        <ProfileSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField label="Full Name">
              {getUsernameFromEmail(dataUser.email)}
            </ProfileField>
            <ProfileField label="Email Address">{dataUser.email}</ProfileField>
          </div>
        </ProfileSection>

        <ProfileSection title="Account Settings">
          <div className="space-y-4">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => {
                /* Handle password change */
              }}
            >
              Change Password
            </Button>

            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                /* Handle email preferences */
              }}
            >
              Email Preferences
            </Button>
          </div>
        </ProfileSection>

        <ProfileSection title="Privacy">
          <div className="space-y-4">
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                /* Handle data download */
              }}
            >
              Download My Data
            </Button>

            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                /* Handle account deletion */
              }}
              className="!text-red-600 !border-red-200 hover:!bg-red-50"
            >
              Delete Account
            </Button>
          </div>
        </ProfileSection>
      </div>
    </div>
  );
};

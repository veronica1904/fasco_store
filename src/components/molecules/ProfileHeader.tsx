import { ProfileAvatar } from "../atoms/ProfileAvatar";

interface ProfileHeaderProps {
  name: string;
  avatarUrl?: string;
}

export const ProfileHeader = ({ name, avatarUrl }: ProfileHeaderProps) => (
  <div className="flex items-center space-x-6 mb-8">
    <ProfileAvatar src={avatarUrl} name={name} />
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <p className="text-gray-500">Personal Account</p>
    </div>
  </div>
);

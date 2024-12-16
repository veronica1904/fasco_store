import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export const ProfileSection = ({ title, children }: ProfileSectionProps) => (
  <div className="border-t border-gray-200 py-6 first:border-t-0">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

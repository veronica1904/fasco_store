import { ReactNode } from "react";

interface ProfileFieldProps {
  label: string;
  children: ReactNode;
}

export const ProfileField = ({ label, children }: ProfileFieldProps) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <div className="text-lg text-gray-900">{children}</div>
  </div>
);

interface DividerProps {
  text?: string;
}

export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && <span className="px-4 text-sm text-gray-500">{text}</span>}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

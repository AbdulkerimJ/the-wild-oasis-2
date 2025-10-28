import { MdEventBusy } from "react-icons/md";

function NoActivity({ message = "No activity for today." }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-indigo-100 rounded-md text-gray-500 min-h-[120px]">
      <MdEventBusy className="text-4xl mb-4 text-indigo-300" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

export default NoActivity;

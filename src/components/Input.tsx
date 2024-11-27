import { forwardRef } from "react";
const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="ml-1 mr-1 p-2">
      <input
        {...props}
        ref={ref}
        className=" w-full p-2 rounded-lg border border-gray-300 outline-cyan-400"
        placeholder="Ask to ai..."
      />
    </div>
  );
});
export default Input;

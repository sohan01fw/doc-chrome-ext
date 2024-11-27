import { useState } from "react";
import Input from "./components/Input";
import { Aiengine } from "./lib/Aiengine";
import AiMsg from "./components/AiMsg";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [usermsg, setUsermsg] = useState("");
  const [aimsg, setAimsg] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsermsg(value);
    if (value !== "") {
      setValue("");
      const text = await Aiengine(value); // Access the value safely
      setAimsg(text);
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-lg font-bold text-center ">Welcome To Ai Assist</h1>
      <div>
        <AiMsg user={usermsg} ai={aimsg} />
      </div>
      <form onSubmit={handleSubmit} className=" absolute w-full bottom-0">
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default App;

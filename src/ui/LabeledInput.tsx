import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface LabeledInputProps<T> {
  label: string;
  inputType: string;
  placeholder: string;
  name: string;
  error: string;
  setData: React.Dispatch<React.SetStateAction<T>>;
  data: string;
}
const LabeledInput = <T,>({
  label,
  inputType,
  placeholder,
  name,
  error,
  setData,
  data,
}: LabeledInputProps<T>) => {
  const [showPass, setShowPass] = useState(false);
  const setNewValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-meduim text-base font-vietnam mb-2.5 
        custom-2xl:text-lg custom-2xl:mb-4"
      >
        {label}
      </label>
      {inputType == "password" ? (
        <div className="bg-white/99 border border-white/95 p-5 custom-2xl:py-6 custom-2xl:text-lg flex items-center">
          {!showPass ? (
            <>
              <input
                type="password"
                className="grow outline-0 bg-transparent"
                placeholder={placeholder}
                value={data}
                onChange={(e) => setNewValue(e)}
                id={name}
              />
              <IoEyeOff
                className="text-2xl text-grey/30 hover:cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                className="grow outline-0 bg-transparent"
                placeholder={placeholder}
                value={data}
                onChange={(e) => setNewValue(e)}
                id={name}
              />
              <IoEye
                className="text-2xl text-grey/30 hover:cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            </>
          )}
        </div>
      ) : inputType == "textarea" ? (
        <textarea
          className="bg-white/99 border border-white/95 p-5 custom-2xl:py-6 custom-2xl:text-lg outline-0"
          name={name}
          id={name}
          value={data}
          onChange={(e) => setNewValue(e)}
          placeholder={placeholder}
          rows={4}
          style={{resize: "none"}}
        ></textarea>
      ) : (
        <input
          type={inputType}
          className="bg-white/99 border border-white/95 p-5 custom-2xl:py-6 custom-2xl:text-lg outline-0"
          placeholder={placeholder}
          value={data}
          onChange={(e) => setNewValue(e)}
          id={name}
        />
      )}
      {error ? (
        <p className="font-vietnam text-base font-normal text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default LabeledInput;

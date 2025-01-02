import React from "react";
import { TiTick } from "react-icons/ti";

interface CheckboxProps<T> {
  text: React.ReactNode;
  name: string;
  data: boolean;
  error: string;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

const Checkbox =<T, > ({ text, name, data, error, setData }: CheckboxProps<T>) => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <div
          className={`w-6 aspect-square border border-white/95 duration-200 flex items-center justify-center rounded hover:cursor-pointer ${
            data ? "bg-orange/50" : "bg-white/99"
          }`}
          onClick={() => setData((prev) => ({ ...prev, [name]: !data }))}
        >
          {data && <TiTick className="text-xl" />}
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>
      {error ? <p className="font-vietnam text-base font-normal text-red-500">{error}</p> : null}
    </div>
  );
};

export default Checkbox;

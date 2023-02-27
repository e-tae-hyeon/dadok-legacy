import palette from "common/styles/palette";
import SvgIcon from "components/@Base/SvgIcon";
import React from "react";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ value, placeholder, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow">
      <SvgIcon name="search" color={palette.gray[300]} size={20} />
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 outline-none placeholder:text-neutral-300"
      />
    </div>
  );
}

export default SearchInput;

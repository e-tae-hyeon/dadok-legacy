import SvgIcon from "components/@Base/SvgIcon";
import React from "react";

export type BookActionIcon =
  | "shoppingCart"
  | "bookClosed"
  | "bookOpen"
  | "trash";

type Props = {
  icon: BookActionIcon;
  label: string;
  onClick: () => void;
};

function BookActionItem({ icon, label, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-neutral-200"
    >
      <SvgIcon name={icon} size={20} />
      <div>{label}</div>
    </button>
  );
}

export default BookActionItem;

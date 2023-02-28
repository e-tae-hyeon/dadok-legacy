import palette from "common/styles/palette";
import IconButton from "components/@Base/IconButton";
import React from "react";

type Props = {
  onClick: () => void;
};

function BookBringLibButton({ onClick }: Props) {
  return (
    <IconButton
      icon="bookClosed"
      iconStyle={{ color: palette.primary, size: 20 }}
      onClick={onClick}
    >
      나의 서재로 등록
    </IconButton>
  );
}

export default BookBringLibButton;

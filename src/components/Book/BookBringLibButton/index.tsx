import palette from "common/styles/palette";
import IconButton from "components/@Base/IconButton";
import React from "react";

function BookBringLibButton() {
  return (
    <IconButton
      icon="bookClosed"
      iconStyle={{ color: palette.primary, size: 20 }}
    >
      나의 서재로 등록
    </IconButton>
  );
}

export default BookBringLibButton;

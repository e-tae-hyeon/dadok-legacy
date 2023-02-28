import { createReservation } from "apis/beta";
import Button from "components/@Base/Button";
import React, { useState } from "react";

type Props = {
  theme?: "primary" | "secondary";
};

function EmailForm({ theme }: Props) {
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!email) return;
      createReservation(email);
      setEmail("");
    } catch (err) {
      //
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 md:flex-row">
      <input
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 p-4 rounded-lg outline-none"
      />
      <Button type="submit" theme={theme}>
        알림 등록
      </Button>
    </form>
  );
}

export default EmailForm;

import { createReservation } from "apis/beta";
import { Button } from "components/@base";
import React, { useState } from "react";
import useToastStore from "stores/useToastStore";

type Props = {
  theme?: "primary" | "secondary";
};

function EmailForm({ theme }: Props) {
  const { setConfig } = useToastStore();
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!email) return;
      createReservation(email);
      setConfig({
        type: "success",
        message: "알림이 등록되었어요 :)",
      });
      setEmail("");
    } catch (err) {
      setConfig({
        type: "error",
        message: "이메일 주소를 다시 한번 확인해주세요.",
      });
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

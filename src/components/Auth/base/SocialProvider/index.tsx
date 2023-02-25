import { SvgIcon } from "components/@base";
import React from "react";

type Provider = "kakao";

type Props = {
  provider: Provider;
};

function SocialProvider({ provider }: Props) {
  const { bgColor, tintColor, icon, label, to } = providersMap[provider];

  return (
    <a
      href={to}
      className="flex items-center justify-center gap-2 p-4 rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <SvgIcon name={icon} color={tintColor} />
      <div style={{ color: tintColor }}>{label}</div>
    </a>
  );
}

export default SocialProvider;

const providersMap = {
  kakao: {
    bgColor: "#FEE500",
    tintColor: "#444",
    icon: "kakao" as const,
    label: "카카오로 시작하기",
    to: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_CALL_BACK}`,
  },
};

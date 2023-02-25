import { useQuery } from "@tanstack/react-query";
import { checkMe } from "apis/me";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const publicPageList = ["/", "/auth"];

const isPublicPage = (pathname: string) => publicPageList.includes(pathname);

function AuthProvider({ children }: Props) {
  const { push, pathname } = useRouter();
  const { data: me, isLoading } = useQuery(["me"], checkMe);

  useEffect(() => {
    if (isLoading) return;

    if (me && isPublicPage(pathname)) push("/my");
    if (!me && !isPublicPage(pathname)) push("/auth");
  }, [pathname, me, isLoading]);

  if (isLoading || (me && isPublicPage(pathname))) return null;

  if (isPublicPage(pathname)) return <div>{children}</div>;

  return <div className="bg-neutral-50">{children}</div>;
}

export default AuthProvider;

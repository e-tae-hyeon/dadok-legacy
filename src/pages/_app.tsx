import { GAScript, ToastProvider } from "@shared/components/module";
import "common/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "utils/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>다독 - 독서 관리 서비스</title>
      </Head>
      <GAScript />
      <Component {...pageProps} />
      <ToastProvider />
    </>
  );
}

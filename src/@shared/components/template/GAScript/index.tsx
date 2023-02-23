import Script from "next/script";
import React from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function GAScript() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_ID}', {page_path: window.location.pathname});
`}
      </Script>
    </>
  );
}

export default GAScript;

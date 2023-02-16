import type { AppProps } from "next/app";
import GlobalStyles from "@/global/GlobalStyle";
import { useEffect, useState } from "react";
import Router from "next/router";
import Loading from "@/global/Loading";
// import Loading from "@/global/loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    const showRoute = ["/verify/result", "/verify", "/", "/survey"];
    const start = (url: any) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(true);
      }
    };
    const end = (url: any) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

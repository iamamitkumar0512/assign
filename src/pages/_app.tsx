import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "../../store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NavBar />
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
}

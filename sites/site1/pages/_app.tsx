import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ textColor: "red" }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

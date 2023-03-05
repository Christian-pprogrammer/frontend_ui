import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import 'regenerator-runtime/runtime'
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
   </ThirdwebProvider>
  );
}

export default MyApp;
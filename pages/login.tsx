import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ChessBoardWrapper from "../components/ChessBoardWrapper";
import ChessGameIcon from "../components/ChessGameIcon";
import { useMetamask } from "@thirdweb-dev/react";
import { useCoinbaseWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect } from "react";
import { getCookie, setCookie } from "../utils/manage_cookies";
import { useRouter } from "next/router";
const Login = () => {
  const connectWithMetamask = useMetamask();
  const connectCoinbase = useCoinbaseWallet();
  const address=useAddress();
  const router = useRouter()
  if(address){
    console.log("Adress:  ",address);
    router.push("/");
    setCookie("address",address);
    
  }
  return (
    <ChessBoardWrapper>
      <ChessGameIcon />
      <div className="flex-1 justify-center items-center flex">
        <div className="flex flex-col h-fit w-fit">
          <h2 className="text-[34px] text-center md:text-[45px] font-semibold">
            Welcome to Chess Games
          </h2>
          <p className="mt-3 text-xs md:text-base text-center text-gray-500">
            Sign in with your wallet to be able to authenticate and play games
          </p>

          <div className="flex flex-col space-y-7 w-full h-fit justify-center  items-center mt-20">
            <button
              onClick={connectWithMetamask}
              className="w-[401px] h-[65px] space-x-[40px] bg-[#438FFE] justify-center items-center   flex flex-row rounded-[30px] "
            >
              <Image
                src="/MetaMask_Fox.png"
                alt="login"
                width={35}
                height={35}
              />
              <p className=" font-[600px] text-[18px]   w-fit text-center text-white ">
                Sign in with metamask
              </p>
            </button>
            <button
              onClick={() => connectCoinbase()}
              className="w-[401px] h-[65px] space-x-[40px] border border-black justify-center items-center   flex flex-row rounded-[30px] "
            >
              <Image
                src="/coinbase.jpg"
                alt="login"
                className="rounded-full"
                width={30}
                height={30}
              />
              <p className=" font-[600px] text-[18px]   w-fit text-center ">
                Sign in with coinbase wallet
              </p>
            </button>
          </div>
          <p className="underline text-center w-full mt-12 font-semibold">
            Show more options
          </p>
        </div>
      </div>
    </ChessBoardWrapper>
  );
};

export default Login;

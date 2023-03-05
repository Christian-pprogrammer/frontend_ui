import { useRouter } from "next/router";
import { useEffect } from "react";
import type { NextPage } from "next";
import { getCookie } from "../utils/manage_cookies";
const withAuth = (Component: NextPage) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user is authenticated
      const address = getCookie("address");
      if (!address) {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default withAuth;

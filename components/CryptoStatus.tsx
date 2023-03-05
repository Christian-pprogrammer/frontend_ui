import React, { useEffect, useState } from "react";
import { getCookie } from "../utils/manage_cookies";

function CryptoStatus() {
  const [address, setAddress] = useState<string | null>("");
  useEffect(() => {
    var myAddress = getCookie("address");
    setAddress(myAddress);
  });
  return (
    <div className="flex flex-row text-xs md:text-base ">
      <div className="flex px-1 w-fit md:px-4 py-2  items-center bg-[#438FFE] rounded-l-md justify-center">
        <p className="text-white ">0.04 ETH</p>
      </div>
      <div className="flex px-2 md:px-4 py-2  items-center bg-white rounded-r-md justify-center">
        <p className="text-black w-fit ">
          {address?.substring(0, 5)}....{address?.substring(address.length - 5)}
        </p>
      </div>
    </div>
  );
}

export default CryptoStatus;

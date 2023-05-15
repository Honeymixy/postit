/** @format */

import React, { useState } from "react";
import { PuffLoader } from "react-spinners";

const Loading = ({ loading }) => {
  let [color, setColor] = useState("#0086b0");

  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div className="py-5">
      <PuffLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        height={44}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;

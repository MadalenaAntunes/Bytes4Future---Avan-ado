import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

export const Color = (props) => {
  const [cor, setCor] = useState("");
  const [lock, setLock] = useState(false);

  const lockIt = () => {
    setLock(!lock);
  };

  const getRandomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let result = "#" + n.slice(0, 6);
    setCor(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cor)
      .then(() => {
        console.log("Color copied to clipboard:", cor);
      })
      .catch((error) => {
        console.error("Error copying color to clipboard:", error);
      });
  };

  useEffect(() => {
    if (!lock) getRandomColor();
  }, [props.change]);

  return (
    <div style={{ backgroundColor: cor, width: "20%", height: "100%" }}>
      <p onClick={copyToClipboard} style={{ cursor: "pointer" }}>
        {cor}
      </p>
      <div>
        {lock ? (
          <FaLock
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
            }}
            onClick={lockIt}
          />
        ) : (
          <FaLockOpen
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
            }}
            onClick={lockIt}
          />
        )}
      </div>
    </div>
  );
};

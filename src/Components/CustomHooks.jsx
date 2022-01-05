import React, { useEffect, useState } from "react";
function useTimeOut(delay) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => clearInterval(timer);
  }, []);
  return ready;
}

export default function () {
  const isReady = useTimeOut(4000);
  return (
    <div>
      <h3>Use Of Custom Hooks</h3>
      {isReady && "READY"}
      {!isReady && "NOT READY"}
    </div>
  );
}

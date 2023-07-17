import { useEffect } from "react";

export default function useDebug() {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  });
}

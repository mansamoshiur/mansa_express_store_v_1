"use client";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency = ({ value = 0 }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-sembold border rounded-full px-1 shadow-md text-[#e94560]">{formatter.format(Number(value))}</div>;
};

export default Currency;

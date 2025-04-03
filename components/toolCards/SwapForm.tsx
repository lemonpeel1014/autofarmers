"use client";

import { ArrowLeftRight } from "lucide-react";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";

const MAX_AMOUNT = 9999;
export default function SwapForm({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const fromToken = metadata?.fromToken as {
    name: string;
    tokenPerUSD: number;
  };
  const toToken = metadata?.toToken as {
    name: string;
    tokenPerUSD: number;
  };

  const [amount, setAmount] = useState(0);

  const convertedAmount = useMemo(() => {
    return (amount * fromToken.tokenPerUSD) / toToken.tokenPerUSD;
  }, [fromToken.tokenPerUSD, toToken.tokenPerUSD, amount]);

  return (
    <div className="flex gap-x-6 p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex flex-col items-center gap-y-2 w-[6.25rem]">
        <div className="flex flex-col font-medium w-full">
          <span className="text-sm">from</span>
          <span className="text-center">{fromToken.name}</span>
        </div>
        <Input
          className=" text-center"
          type="number"
          min={0}
          max={MAX_AMOUNT}
          value={amount}
          onChange={(e) => {
            if (!e.target.value) {
              return setAmount(0);
            }
            if (isNaN(parseFloat(e.target.value))) {
              return setAmount(0);
            }

            if (parseFloat(e.target.value) > MAX_AMOUNT) {
              return setAmount(MAX_AMOUNT);
            }

            return setAmount(parseFloat(e.target.value));
          }}
        />
        <span className="font-medium">(${fromToken.tokenPerUSD.toFixed(2)})</span>
      </div>
      <div className="flex flex-col justify-center">
        <ArrowLeftRight />
      </div>
      <div className="flex flex-col items-center gap-y-2 w-[6.25rem]">
        <div className="flex flex-col font-medium w-full">
          <span className="text-sm">to</span>
          <span className="text-center">{toToken.name}</span>
        </div>
        <Input readOnly className="text-center" value={convertedAmount} />
        <span className="font-medium">(${toToken.tokenPerUSD.toFixed(2)})</span>
      </div>
    </div>
  );
}

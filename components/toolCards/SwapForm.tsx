"use client";

import { ArrowLeftRight } from "lucide-react";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";

const MAX_AMOUNT = 9999;
export default function SwapForm({
  isLastMessage,
  metadata,
}: {
  isLastMessage: boolean;
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const fromToken = metadata?.fromToken as {
    name: string;
    amount?: number;
    tokenPerUSD: number;
  };
  const toToken = metadata?.toToken as {
    name: string;
    tokenPerUSD: number;
  };

  const [amount, setAmount] = useState(fromToken.amount ?? 0);

  const convertedAmount = useMemo(() => {
    return (amount * fromToken.tokenPerUSD) / toToken.tokenPerUSD;
  }, [fromToken.tokenPerUSD, toToken.tokenPerUSD, amount]);

  return (
    <div className="flex gap-x-6 p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex flex-col items-center gap-y-2 flex-1 min-w-[6.25rem]">
        <div className="flex flex-col font-medium w-full">
          <span className="text-sm">from</span>
          <span className="text-center">{fromToken.name}</span>
        </div>
        <Input
          className=" text-center"
          disabled={!isLastMessage}
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
        <span className="font-medium">
          ($
          {(amount * fromToken.tokenPerUSD).toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
          )
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <ArrowLeftRight />
      </div>
      <div className="flex flex-col items-center gap-y-2 flex-1 min-w-[6.25rem]">
        <div className="flex flex-col font-medium w-full">
          <span className="text-sm">to</span>
          <span className="text-center">{toToken.name}</span>
        </div>
        <Input readOnly className="text-center" value={convertedAmount} />
        <span className="font-medium">
          ($
          {(convertedAmount * toToken.tokenPerUSD).toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
          )
        </span>
      </div>
    </div>
  );
}

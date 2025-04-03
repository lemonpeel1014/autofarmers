"use client";

import { ArrowLeftRight } from "lucide-react";
import { Input } from "../ui/input";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../ui/button";

const MAX_AMOUNT = 9999;
export default function SwapForm({
  isLastMessage,
  metadata,
  onClickConfirm,
  onClickCancel,
}: {
  isLastMessage: boolean;
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
  onClickConfirm: (message: string) => void;
  onClickCancel: () => void;
}) {
  const feeUnit = metadata?.feeUnit as string;
  const providersFee = metadata?.providersFee as number;
  const networkFee = metadata?.networkFee as number;

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

  const handleOnClickConfirm = useCallback(() => {
    // TODO: replace agent name
    onClickConfirm(
      `@Agent swap ${convertedAmount} ${fromToken.name} for ${toToken.name}`,
    );
  }, [convertedAmount, fromToken.name, onClickConfirm, toToken.name]);

  return (
    <div className="flex flex-col p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex gap-x-6">
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

      <div className="flex flex-col my-4">
        <div className="grid grid-cols-2">
          <div className="flex">
            <span>Providers Fee</span>
            <span>:</span>
          </div>
          <span>
            {(providersFee * convertedAmount).toLocaleString("en-US", {
              maximumFractionDigits: 3,
              minimumFractionDigits: 2,
            })}
            {feeUnit}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex">
            <span>Network Fee</span>
            <span>:</span>
          </div>
          <span>
            {networkFee.toLocaleString("en-US", {
              maximumFractionDigits: 3,
              minimumFractionDigits: 2,
            })}
            {feeUnit}
          </span>
        </div>
      </div>

      <div className="flex gap-x-6 justify-center">
        <Button
          variant="ghost"
          disabled={!isLastMessage}
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button disabled={!isLastMessage} onClick={handleOnClickConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

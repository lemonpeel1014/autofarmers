import { ArrowLeftRight } from "lucide-react";
import { Button } from "../ui/button";

export default function SwapConfirm({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const feeUnit = metadata?.feeUnit as string;
  const providersFee = metadata?.providersFee as number;
  const networkFee = metadata?.networkFee as number;

  const fromToken = metadata?.fromToken as {
    name: string;
    amount: number;
    tokenPerUSD: number;
  };
  const toToken = metadata?.toToken as {
    name: string;
    amount: number;
    tokenPerUSD: number;
  };

  return (
    <div className="flex flex-col p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex gap-x-6">
        <div className="flex flex-col items-center gap-y-2 w-[6.25rem]">
          <div className="flex flex-col font-medium w-full">
            <span className="text-sm">from</span>
            <span className="text-center">{fromToken.name}</span>
          </div>
          <span className="font-medium">{fromToken.amount}</span>
          <span className="font-medium">
            (${fromToken.tokenPerUSD.toFixed(2)})
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <ArrowLeftRight />
        </div>
        <div className="flex flex-col items-center gap-y-2 w-[6.25rem]">
          <div className="flex flex-col font-medium w-full">
            <span className="text-sm">to</span>
            <span className="text-center">{toToken.name}</span>
          </div>
          <span className="font-medium">{toToken.amount}</span>
          <span className="font-medium">
            (${toToken.tokenPerUSD.toFixed(2)})
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-4 mb-8">
        <div className="grid grid-cols-2">
          <div className="flex">
            <span>Providers Fee</span>
            <span>:</span>
          </div>
          <span>
            {providersFee}
            {feeUnit}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex">
            <span>Network Fee</span>
            <span>:</span>
          </div>
          <span>
            {networkFee}
            {feeUnit}
          </span>
        </div>
      </div>

      <div className="flex gap-x-6 justify-center">
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
}

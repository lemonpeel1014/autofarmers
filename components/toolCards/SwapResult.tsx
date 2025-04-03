import { ArrowLeftRight } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function SwapResult({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const tx = metadata?.tx as string;
  const state = metadata?.status as string;
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
    <div className="bg-card text-card-foreground flex w-fit flex-col gap-y-4 rounded-xl border p-4 shadow">
      <div className="flex max-w-[17rem]">
        <p className="truncate text-sm font-medium">Tx : {tx}</p>

        {state !== 'success' ? (
          <Badge>Success</Badge>
        ) : (
          <Badge variant="destructive">Fail</Badge>
        )}
      </div>

      <div className="flex gap-x-6">
        <div className="flex min-w-[6.25rem] flex-1 flex-col items-center gap-y-2">
          <div className="flex w-full flex-col font-medium">
            <span className="text-sm">from</span>
            <span className="text-center">{fromToken.name}</span>
          </div>
          <span className="font-medium">{fromToken.amount}</span>
          <span className="font-medium">
            ($
            {(fromToken.amount * fromToken.tokenPerUSD).toLocaleString(
              'en-US',
              {
                maximumFractionDigits: 2,
              },
            )}
            )
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <ArrowLeftRight />
        </div>
        <div className="flex min-w-[6.25rem] flex-1 flex-col items-center gap-y-2">
          <div className="flex w-full flex-col font-medium">
            <span className="text-sm">to</span>
            <span className="text-center">{toToken.name}</span>
          </div>
          <span className="font-medium">{toToken.amount}</span>
          <span className="font-medium">
            ($
            {(toToken.amount * toToken.tokenPerUSD).toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
            )
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2">
          <div className="flex">
            <span>Providers Fee</span>
            <span>:</span>
          </div>
          <span>
            {providersFee.toLocaleString('en-US', {
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
            {networkFee.toLocaleString('en-US', {
              maximumFractionDigits: 3,
              minimumFractionDigits: 2,
            })}
            {feeUnit}
          </span>
        </div>
      </div>
    </div>
  );
}

'use client';

import { ArrowLeftRight } from 'lucide-react';
import { Input } from '../ui/input';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

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
    <Card className="w-full max-w-sm p-6 shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-medium">Transaction</h2>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div>
          <p className="mb-2 text-gray-500">From</p>
          <p className="text-2xl font-bold">{fromToken.name}</p>
          <Input
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
            className="h-8 py-0 text-2xl font-bold shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <p className="text-muted-foreground">
            ($
            {(amount * fromToken.tokenPerUSD).toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
            )
          </p>
        </div>

        <div className="flex items-center justify-center rounded-full bg-gray-100 p-3">
          <ArrowLeftRight size={20} className="text-gray-500" />
        </div>

        <div className="text-right">
          <p className="mb-2 text-gray-500">To</p>
          <p className="text-2xl font-bold">{toToken.name}</p>
          <p className="text-2xl font-bold">{convertedAmount.toFixed(2)}</p>
          <p className="text-muted-foreground">
            ($
            {(convertedAmount * toToken.tokenPerUSD).toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
            )
          </p>
        </div>
      </div>

      {/*
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="mb-2 flex items-center justify-between">
            <div>Providers Fee</div>
            <div className="font-medium">
              {(providersFee * convertedAmount).toLocaleString('en-US', {
                maximumFractionDigits: 3,
                minimumFractionDigits: 2,
              })}
              {feeUnit}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Network Fee</div>
            <div className="font-medium">
              {networkFee.toLocaleString('en-US', {
                maximumFractionDigits: 3,
                minimumFractionDigits: 2,
              })}
              {feeUnit}
            </div>
          </div>
        </div> 
      */}

      <div className="mt-8 flex gap-4">
        <Button
          className="flex-1"
          variant="ghost"
          disabled={!isLastMessage}
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button
          className="flex-1"
          disabled={!isLastMessage}
          onClick={handleOnClickConfirm}
        >
          Confirm
        </Button>
      </div>
    </Card>
  );
}

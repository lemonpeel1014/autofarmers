import { ArrowLeftRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { tradeSchema } from '@/data/sendai';
import { z } from 'zod';
import { useGetTokenList } from '@/hooks/token_list';
import { useGetTokenPrice } from '@/hooks/coingecko';
import { zip } from 'lodash-es';
import { useMemo } from 'react';

function SwapResultContent({ info }: { info: z.infer<typeof tradeSchema> }) {
  const { data: tokens } = useGetTokenList([info.inputToken, info.outputToken]);
  const { data: tokenPrices } = useGetTokenPrice(
    tokens.map((t) => {
      return {
        id: t.name,
        address: t.address,
      };
    }),
  );

  const { inputAmount } = info;

  const [fromToken, toToken] = zip(tokens, tokenPrices)
    .filter((t) => t[0] && t[1])
    .map(([t, price]) => {
      return {
        ...t,
        tokenPerUSD: price ?? 0,
      };
    });

  const [outputAmount, outputAmountPerUSD] = useMemo(() => {
    if (!fromToken || !toToken) return [0, 0];
    const outputAmountPerUSD = inputAmount * fromToken.tokenPerUSD;
    const outputAmount =
      toToken.tokenPerUSD == 0 ? 0 : outputAmountPerUSD / toToken.tokenPerUSD;
    return [outputAmount, outputAmountPerUSD];
  }, [fromToken, toToken, inputAmount]);

  return (
    <div className="flex gap-x-6">
      {fromToken && (
        <div className="flex min-w-[6.25rem] flex-1 flex-col items-center gap-y-2">
          <div className="flex w-full flex-col font-medium">
            <span className="text-sm">from</span>
            <span className="text-center">{fromToken.name}</span>
          </div>
          <span className="font-medium">{inputAmount}</span>
          <span className="font-medium">
            ($
            {(inputAmount * fromToken.tokenPerUSD).toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
            )
          </span>
        </div>
      )}
      <div className="flex flex-col justify-center">
        <ArrowLeftRight />
      </div>
      {toToken && (
        <div className="flex min-w-[6.25rem] flex-1 flex-col items-center gap-y-2">
          <div className="flex w-full flex-col font-medium">
            <span className="text-sm">to</span>
            <span className="text-center">{toToken.name}</span>
          </div>
          <span className="font-medium">{outputAmount}</span>
          <span className="font-medium">
            ($
            {outputAmountPerUSD.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
            )
          </span>
        </div>
      )}
    </div>
  );
}

export default function SwapResult({
  info,
}: {
  info: z.infer<typeof tradeSchema>;
}) {
  return (
    <div className="bg-card text-card-foreground flex w-fit flex-col gap-y-4 rounded-xl border p-4 shadow">
      <div className="flex max-w-[17rem]">
        <p className="truncate text-sm font-medium">Tx : {info.transaction}</p>

        {info.status === 'success' ? (
          <Badge>Success</Badge>
        ) : (
          <Badge variant="destructive">Fail</Badge>
        )}
      </div>

      {info.status === 'success' && <SwapResultContent info={info} />}
    </div>
  );
}

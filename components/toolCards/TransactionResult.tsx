import { Badge } from '../ui/badge';

export default function TransactionResult({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const tx = metadata?.tx as string;
  const poolName = metadata?.poolName as string;
  const amount = metadata?.amount as number;
  const state = metadata?.status as string;

  return (
    <div className="bg-card text-card-foreground flex w-fit flex-col rounded-xl border p-4 shadow">
      <div className="flex flex-col">
        <div className="flex max-w-[17rem]">
          <p className="truncate text-sm font-medium">Tx : {tx}</p>

          {state !== 'success' ? (
            <Badge>Success</Badge>
          ) : (
            <Badge variant="destructive">Fail</Badge>
          )}
        </div>
        <span className="font-medium">Pool :&nbsp;{poolName}</span>
        <span className="font-medium">
          Amount :&nbsp;
          {amount.toLocaleString('en-US', {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}

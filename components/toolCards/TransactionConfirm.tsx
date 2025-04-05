import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function TransactionConfirm({
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
  onClickConfirm: () => void;
  onClickCancel: () => void;
}) {
  const poolName = metadata?.poolName as string;
  const amount = metadata?.amount as number;

  return (
    <Card className="text-card-foreground w-full max-w-sm rounded-xl p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-medium">Liquidity Providing</h2>
      </div>

      <div className="space-y-6">
        <div>
          <div className="mb-2">Pool</div>
          <div className="text-2xl font-bold">{poolName}</div>
        </div>
        <div>
          <p className="mb-2">Amount</p>
          <p className="text-2xl font-bold">
            {amount.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Button
          disabled={!isLastMessage}
          onClick={onClickCancel}
          className="flex-1"
          variant="ghost"
        >
          Cancel
        </Button>
        <Button
          className="flex-1"
          disabled={!isLastMessage}
          onClick={onClickConfirm}
        >
          Confirm
        </Button>
      </div>
    </Card>
  );
}

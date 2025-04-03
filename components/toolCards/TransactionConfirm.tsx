import { Button } from '../ui/button';

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
    <div className="bg-card text-card-foreground flex w-fit flex-col rounded-xl border p-4 shadow">
      <div className="mb-4 flex flex-col font-medium">
        <span>Pool : {poolName}</span>
        <span>
          Amount :&nbsp;
          {amount.toLocaleString('en-US', {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="flex justify-center gap-x-6">
        <Button
          variant="ghost"
          disabled={!isLastMessage}
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button disabled={!isLastMessage} onClick={onClickConfirm}>
          Sign & Stake
        </Button>
      </div>
    </div>
  );
}

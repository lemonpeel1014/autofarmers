import { Button } from "../ui/button";

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
    <div className="flex flex-col p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex flex-col font-medium mb-4">
        <span>Pool : {poolName}</span>
        <span>
          Amount :{" "}
          {amount.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="flex gap-x-6 justify-center">
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

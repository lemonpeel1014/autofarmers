import { Button } from "../ui/button";

export default function TransactionConfirm({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const poolName = metadata?.poolName as string;
  const amount = metadata?.amount as number;

  return (
    <div className="flex flex-col p-4 rounded-xl border bg-card text-card-foreground shadow w-fit">
      <div className="flex flex-col gap-y-3 mb-8">
        <span>Pool : {poolName}</span>
        <span>Amount : {amount}</span>
      </div>

      <div className="flex gap-x-6 justify-center">
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
}

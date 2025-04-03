import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MyPositionTable({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const pools = metadata?.pools as {
    name: string;
    tokenSymbols: string[];
    apy: number;
    amount: number;
    value: number;
    reward: number;
  }[];

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow w-fit">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-center font-bold text-card-foreground">
              Pool Name
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              Token Symbol
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              APY(%)
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              Amount
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              Value($)
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              Reward
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pools.map((pool, index) => {
            return (
              <TableRow key={`pool-${pool.name}-${index}`}>
                <TableCell>{pool.name}</TableCell>
                <TableCell>
                  {pool.tokenSymbols[0]}-{pool.tokenSymbols[1]}
                </TableCell>
                <TableCell>{pool.apy}</TableCell>
                <TableCell>
                  {pool.amount.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>
                  {pool.value.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>{pool.reward.toFixed(2)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

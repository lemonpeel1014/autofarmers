import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function LiquidPoolTable({
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
    tvl: number;
    fee: number;
  }[];

  return (
    <div className="bg-card text-card-foreground w-fit rounded-xl border shadow">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-card-foreground text-center font-bold">
              Pool Name
            </TableHead>
            <TableHead className="text-card-foreground text-center font-bold">
              Token Symbol
            </TableHead>
            <TableHead className="text-card-foreground text-center font-bold">
              APY(%)
            </TableHead>
            <TableHead className="text-card-foreground text-center font-bold">
              TVL(SOL)
            </TableHead>
            <TableHead className="text-card-foreground text-center font-bold">
              Fee(%)
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
                  {pool.tvl.toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>{pool.fee.toFixed(2)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

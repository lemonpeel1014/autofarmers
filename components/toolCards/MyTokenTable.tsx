import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { z } from 'zod';
import { balanceSchema } from '@/data/sendai';

export default function MyTokenTable({
  balance,
}: {
  balance: z.infer<typeof balanceSchema>;
}) {
  const tokens = [
    {
      name: 'SOL',
      amount: balance.sol,
    },
    ...balance.tokens.map((t) => {
      return {
        name: t.symbol,
        amount: t.balance,
      };
    }),
  ];

  return (
    <div className="bg-card text-card-foreground w-fit min-w-[11rem] rounded-xl border shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-card-foreground text-center font-bold">
              Name
            </TableHead>
            <TableHead className="text-card-foreground text-center font-bold">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((tokens, index) => {
            return (
              <TableRow key={`token-${tokens.name}-${index}`}>
                <TableCell className="text-center">{tokens.name}</TableCell>
                <TableCell className="text-right">
                  {tokens.amount.toLocaleString('en-US', {
                    maximumFractionDigits: 8,
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

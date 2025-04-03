import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function MyTokenTable({
  metadata,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
}) {
  const tokens = metadata?.tokens as {
    name: string;
    amount: number;
  }[];

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
                    maximumFractionDigits: 2,
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

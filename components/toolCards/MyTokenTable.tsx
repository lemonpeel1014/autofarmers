import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="rounded-xl border bg-card text-card-foreground shadow w-fit min-w-[11rem]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold text-card-foreground">
              Name
            </TableHead>
            <TableHead className="text-center font-bold text-card-foreground">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((tokens, index) => {
            return (
              <TableRow key={`token-${tokens.name}-${index}`}>
                <TableCell className="text-center">{tokens.name}</TableCell>
                <TableCell className="text-right">{tokens.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

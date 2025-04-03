import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { throttle } from "lodash-es";

export default function UserMessageInput({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (value.length === 0) return;
        onChange("");
      }}
      className="relative flex-1"
    >
      <Textarea
        placeholder="Give answer to your agents."
        className="pr-12 min-h-[80px] max-h-[120px]"
        onChange={throttle((e) => onChange(e.target.value))}
        onKeyDown={(e) => {
          if (value.length === 0) return;
          if (e.key !== "Enter" || !e.metaKey) return;

          onSubmit();
        }}
        value={value}
      />
      <Button
        type="submit"
        size="icon"
        className="absolute bottom-4 right-4 h-9 w-9"
        disabled={value.length === 0}
      >
        <Send />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}

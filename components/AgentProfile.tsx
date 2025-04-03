import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from './ui/skeleton';

export default function AgentProfile({
  profileImage,
  state = 'waiting',
  size = 'md',
  name,
}: {
  profileImage: string;
  state?: 'idle' | 'working' | 'waiting';
  size?: 'md' | 'lg';
  name?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <Avatar
        className={cn('', {
          'size-10': size === 'md',
          'size-14': size === 'lg',
          'grayscale-75': state === 'idle',
        })}
      >
        <AvatarImage src={profileImage} />
        <AvatarFallback>
          <Skeleton className="size-full" />
        </AvatarFallback>
      </Avatar>
      {name && <span className="text-sm font-medium">{name}</span>}
    </div>
  );
}

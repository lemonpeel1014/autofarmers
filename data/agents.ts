export type Agent = {
  name: string;
  role: string;
  profileImage: string;
  state: 'idle' | 'working' | 'waiting';
};

export const AGENT_YIELDO: Agent = {
  name: 'Yieldo',
  role: 'Yield',
  profileImage: '/agents/yieldo.png',
  state: 'working',
};

export const AGENT_SWAVV: Agent = {
  name: 'Swavv',
  role: 'Swap',
  profileImage: '/agents/swavv.png',
  state: 'waiting',
};

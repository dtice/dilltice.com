import { Themes } from '@/theme/types';

type Actions = {
  toggle: () => void;
  setTheme: (mode: Themes) => void;
};

export type { Actions };

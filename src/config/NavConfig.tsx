import IconClose from '../assets/icons/ic-close.svg';
import IconRefresh from '../assets/icons/ic-refresh.svg';
import IconSave from '../assets/icons/ic-save.svg';

export enum NavConfigActionsEnum {
  CLOSE = 'close',
  SAVELIST = 'savelist',
  GENERATE = 'generate',
}

interface NavConfig {
  action: NavConfigActionsEnum;
  icon?: string;
  text?: string;
}

export const navConfig: NavConfig[] = [
  {
    action: NavConfigActionsEnum.CLOSE,
    icon: IconClose,
    text: 'Close',
  },
  {
    action: NavConfigActionsEnum.SAVELIST,
    icon: IconSave,
    text: 'Saved Palettes',
  },
  {
    action: NavConfigActionsEnum.GENERATE,
    icon: IconRefresh,
    text: 'Generate',
  },
]

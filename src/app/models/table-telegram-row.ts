import { Balise, BaliseGroup, Telegram, Variable } from './api';

export type TableTelegramRow = Omit<Telegram, 'presentedMessageType'> &
  Omit<BaliseGroup, 'balises'> &
  Omit<Balise, 'telegrams'> & {
    mMCount?: Variable['value'];
    uiId: string;
  };

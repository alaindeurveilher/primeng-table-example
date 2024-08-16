import { Columns } from '../models/columns';

/**
 * Definition of Columns used for the table of Telegrams.
 * Requirement is to not translate the header titles.
 */
export const TELEGRAMS_TABLE_COLUMNS: Columns = {
  telegramType: { order: 0, header: 'Telegram type' },
  nidC: { order: 1, header: 'NID_C' },
  nidBg: { order: 2, header: 'NID_BG' },
  npig: { order: 3, header: 'N_PIG' },
  mMCount: { order: 4, header: 'M_MCOUNT' },
  baliseType: { order: 5, header: 'Balise type' },
  baliseGroupType: { order: 6, header: 'BG type' },
  nomFunction: { order: 7, header: 'Nominal Fct' },
  revFunction: { order: 8, header: 'Reverse Fct' },
  signal: { order: 9, header: 'Signal' },
  signalType: { order: 10, header: 'Signal type' },
  aspectName: { order: 11, header: 'Aspect' },
  eoa: { order: 12, header: 'EOA' },
  vloa: { order: 13, header: 'VLOA' },
  itinerary: { order: 14, header: 'Itinerary' },
  packetList: { order: 15, header: 'Packet list' },
  length: { order: 16, header: 'Length (bit)' },
} as const;

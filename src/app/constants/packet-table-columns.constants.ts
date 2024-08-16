import { Columns } from '../models/columns';

/**
 * Definition of Columns used for the Packet table.
 * Requirement is to not translate the header titles.
 */
export const PACKET_TABLE_COLUMNS: Columns = {
  variableName: { order: 0, header: 'Variable name' },
  content: { order: 1, header: 'Content' },
  length: { order: 2, header: 'Length' },
} as const;

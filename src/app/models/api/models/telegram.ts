/* tslint:disable */
/* eslint-disable */
import { Packet } from '../models/packet';

/**
 * A telegram
 */
export interface Telegram {
  aspectName?: string;
  eoa?: string;
  itinerary?: string;
  length?: string;
  nomFunction?: string;
  packetList?: string;

  /**
   * The list of packets of the telegram
   */
  packets: Array<Packet>;
  presentedMessageType?: string;
  revFunction?: string;
  signal?: string;
  signalType?: string;

  /**
   * Telegram types
   */
  telegramType: 'DEFAULT' | 'LEU' | 'ERROR';
  vloa?: string;
}

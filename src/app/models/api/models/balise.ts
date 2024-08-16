/* tslint:disable */
/* eslint-disable */
import { Telegram } from '../models/telegram';

/**
 * The balise element
 */
export interface Balise {

  /**
   * The type of the balise
   */
  baliseType: 'FIXED' | 'SWITCHABLE';
  npig?: number;

  /**
   * The list of telegrams of the balise
   */
  telegrams: Array<Telegram>;
}

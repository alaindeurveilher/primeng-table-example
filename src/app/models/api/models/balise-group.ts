/* tslint:disable */
/* eslint-disable */
import { Balise } from '../models/balise';

/**
 * Balise group
 */
export interface BaliseGroup {

  /**
   * Type of the balise group
   */
  baliseGroupType: 'IBG' | 'SBG' | 'TFBG' | 'TSBG';

  /**
   * List of the balises of the balise group
   */
  balises: Array<Balise>;

  /**
   * NidBG of the balise group
   */
  nidBg: number;

  /**
   * NidC of the balise group
   */
  nidC: number;
}

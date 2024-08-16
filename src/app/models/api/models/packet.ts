/* tslint:disable */
/* eslint-disable */
import { Variable } from '../models/variable';

/**
 * A packet
 */
export interface Packet {

  /**
   * The packet type
   */
  packetType: 'HEADER' | 'P3' | 'P5' | 'P12' | 'P15' | 'P16' | 'P21' | 'P27' | 'P39' | 'P41' | 'P42' | 'P44' | 'P45' | 'P46' | 'P49' | 'P51' | 'P57' | 'P58' | 'P63' | 'P65' | 'P66' | 'P67' | 'P68' | 'P70' | 'P71' | 'P72' | 'P76' | 'P79' | 'P80' | 'P90' | 'P131' | 'P132' | 'P133' | 'P134' | 'P136' | 'P137' | 'P138' | 'P139' | 'P140' | 'P141' | 'P254' | 'P255';

  /**
   * The list of the variables of the packet
   */
  variables: Array<Variable>;
}

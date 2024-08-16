import { Injectable } from '@angular/core';
import { Balise, BaliseGroup, Packet, Project, Telegram } from '../models/api';

const getSequence = (size: number, offset?: number): number[] => Array(size)
  .fill(1)
  .map((_, index) => index + (offset ?? 0));

const telegramTypes: Telegram['telegramType'][] = ['DEFAULT', 'LEU', 'ERROR'];
const baliseGroupTypes: BaliseGroup['baliseGroupType'][] = ['IBG', 'SBG', 'TFBG', 'TSBG'];
const signalTypes: string[] = ['Main stop signal', 'Small signal', 'Small signal panel', 'Independent warning signal', 'simplified signal'];
const aspects: string[] = ['RNP', 'Y', 'D_Y', 'G', 'D_G', '2G', 'D_2G', '3G', 'D_3G', 'W', 'H', 'V'];
const bgFunctions: string[] = ['IBG', 'MA', 'IMA', 'IN', 'INFILL_REPOS', 'KW', 'L0', 'L1', 'P3', 'P39', 'P46', 'P46inL1', 'RELOC', 'REPOS', 'SBG', 'TEXT'];
const nidCs: (253 | 255)[] = [253, 255];
const nPigs: (0 | 1)[] = [0, 1];
const nidBgs: number[] = getSequence(2_500);
const mMCountMax: number = 254;
const mMCounts: number[] = getSequence(mMCountMax);
const baliseTypes: Balise['baliseType'][] = ['FIXED', 'SWITCHABLE'];
const criticalities: ('Critical' | 'Important')[] = ['Critical', 'Important'];
const packetTypes: Packet['packetType'][] = ['P3', 'P5', 'P12', 'P16', 'P21', 'P27', 'P41', 'P44', 'P46', 'P65', 'P66', 'P68', 'P72', 'P80', 'P132', 'P136', 'P137', 'P254'];
const packets: string[] = packetTypes.map((packetType) => packetType.replace('P', ''));
const variablesSuffixes: string[] = ['', 'D_', 'G_', 'L_', 'M_', 'N_', 'Q_', 'T_', 'V_'];
const signals = {
  first: ['A', 'B', 'K', 'E', 'I', 'L'],
  second: ['', 'X'],
  third: ['W', 'R', 'U'],
  block: [9, 12, 45, 23],
};
const descriptions = {
  static: [() => 'Error during the creation of the msg BG', () => 'Message length exceeds length limit'],
  withSignalAndBalise: [
    ({ signal, balise }: { signal: string; balise: string }) =>
      `No route found for signal ${signal} at balise ${balise}`,
  ],
  withVariableAndValue: [
    ({ variable, value }: { variable: string; value: string }) =>
      `Value ${value} is not valid for variable ${variable}`,
  ],
};
const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
const telegramLengths: number[] = getSequence(200, 300);

const getRandomNumber = (range: number = 1 ) => Math.floor(Math.random() * range);

const getRandomFrom = (arr: any[]) => arr[getRandomNumber(arr.length)];

const getRandomSignalName = (): string => [
    getRandomFrom(signals.first),
    getRandomFrom(signals.second),
    '-',
    getRandomFrom(signals.third),
    '.',
    getRandomFrom(signals.block),
  ].join('');

const randomStringLength: number[] = getSequence(10, 1);
const getRandomString = (size: number): string => {
    let result: string = '';
    let counter: number = 0;
    while (counter < size) {
      result += characters.charAt(getRandomNumber(characters.length));
      counter += 1;
    }
    return result;
  };
const getRandomVariableName = (): string => [getRandomFrom(variablesSuffixes), getRandomString(getRandomFrom(randomStringLength))]
  .join('')
  .toUpperCase();
const getRandomVariableValue = (): number => getRandomNumber(10_000);
const getRandomVariableLength = () => getRandomFrom([0, 1]) * getRandomNumber(10_000) + getRandomFrom([0, 1]) * getRandomNumber(1000) + getRandomNumber(100);

const getRandomItineraties = () => {
  const list = getSequence(getRandomNumber(20)).map((_) => getRandomSignalName());
  return list.length > 0 ? list : ['/'];
}

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  generateDummyProject(): Project {
    const bgsSequence: number[] = getSequence(10);
    const nbOfMMCounts: number = 10;
    const getMMCountsSequence = () => getSequence(getRandomFrom(getSequence(nbOfMMCounts)), getRandomFrom(getSequence(mMCountMax - nbOfMMCounts)));
    const getRandomFunctions = () => getSequence(getRandomFrom(getSequence(3))).map((_) => getRandomFrom(bgFunctions));
    const getRandomRevFunctions = () => {
      const size: number | undefined = getRandomFrom([...getSequence(10).map((_) => undefined), ...getSequence(2)]);
      return !size ? undefined : getRandomFunctions().join(', ');
    };
    const getRandomPackets = () => {
      const start: number = getRandomFrom(getSequence(packets.length -1));
      const end: number = getRandomFrom(getSequence(packets.length - start, start + 1));
      return packets.slice(start, end);
    };
    
    return {
      projectMetaData: {
        projectName: '',
        projectVersion: '',
      },
      baliseGroups: bgsSequence.map(() => ({
        nidC: getRandomFrom(nidCs),
        nidBg: getRandomFrom(nidBgs),
        baliseGroupType: getRandomFrom(baliseGroupTypes),
        balises: nPigs.map((npig) => ({
          npig,
          baliseType: getRandomFrom(baliseTypes),
          telegrams: getMMCountsSequence().map((mMCount) => ({
            telegramType: getRandomFrom(telegramTypes),
            nomFunction: getRandomFunctions().join(', '),
            revFunction: getRandomRevFunctions(),
            signal: getRandomSignalName(),
            signalType: getRandomFrom(signalTypes),
            aspectName: getRandomFrom(aspects),
            eoa: getRandomSignalName(),
            vloa: '0',
            itinerary: getRandomItineraties().join(' / '),
            packetList: ['H', ...getRandomPackets(), '255'].join(', '),
            length: getRandomFrom(telegramLengths),
            packets: [
              {
                packetType: 'HEADER',
                variables: [
                  {
                    name: 'M_MCOUNT',
                    value: mMCount,
                    length: 10,
                  },
                  ...getSequence(9).map((_) => ({
                    name: getRandomVariableName(),
                    value: getRandomVariableValue(),
                    length: getRandomVariableLength(),
                  })),
                ],
              },
              ...getRandomPackets().map((packetNumber) => ({
                packetType: `P${packetNumber}` as Packet['packetType'],
                variables: [
                  {
                    name: 'NID_PACKET',
                    value: +packetNumber,
                    length: 10,
                  },
                  ...getSequence(getRandomNumber(20), 5).map((_) => ({
                    name: getRandomVariableName(),
                    value: getRandomVariableValue(),
                    length: getRandomVariableLength(),
                  })),
                ],
              })),
              {
                packetType: 'P255',
                variables: [
                  {
                    name: 'NID_PACKET',
                    value: 255,
                    length: 10,
                  }
                ],
              },
            ],
          })),
        })),
      })),
    };
  }
}

import { computed, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Balise, BaliseGroup, Packet, Project, Telegram, Variable } from '../models/api';
import { TableTelegramRow } from '../models/table-telegram-row';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dummyService: DummyService = inject(DummyService);
  readonly project: Signal<Project> = computed(() => this.dummyService.generateDummyProject());
  readonly telegrams: Signal<TableTelegramRow[]> = computed(
    () =>
      this.project().baliseGroups.flatMap(
        (baliseGroup: BaliseGroup) =>
          baliseGroup.balises.flatMap(
            (balise: Balise) =>
              balise.telegrams
                .filter((telegram: Telegram | null) => !!telegram)
                .flatMap((telegram: Telegram) => {
                  const mMCount: Variable['value'] | undefined = this.getMMCountValue(telegram);
                  const uiId: string = `${baliseGroup.nidC}_${baliseGroup.nidBg}_${balise.npig}_${mMCount}`;

                  return {
                    telegramType: telegram.telegramType,
                    nidC: baliseGroup.nidC,
                    nidBg: baliseGroup.nidBg,
                    npig: balise.npig,
                    mMCount,
                    baliseType: balise.baliseType,
                    baliseGroupType: baliseGroup.baliseGroupType,
                    nomFunction: telegram.nomFunction,
                    revFunction: telegram.revFunction,
                    signal: telegram.signal,
                    signalType: telegram.signalType,
                    aspectName: telegram.aspectName,
                    eoa: telegram.eoa,
                    vloa: telegram.vloa,
                    itinerary: telegram.itinerary,
                    packetList: telegram.packetList,
                    length: telegram.length,
                    packets: telegram.packets ?? [],
                    uiId,
                  };
                }) ?? []
          ) ?? []
      ) ?? []
  );
  selectedTelegramRow: WritableSignal<TableTelegramRow | undefined> = signal<TableTelegramRow | undefined>(undefined);
  readonly selectedPackets: Signal<Packet[]> = computed(() => this.selectedTelegramRow()?.packets ?? []);
  tableClasses: string =
    'p-datatable-gridlines p-datatable-striped telegrams-table p-datatable-sm gemini-p-datatable-xs';
  tableCellClasses: string = 'white-space-nowrap text-overflow-ellipsis';
  
  private getMMCountValue(telegram: Telegram): Variable['value'] | undefined {
    const headerPacket: Packet | undefined = telegram.packets.find(packet => packet.packetType === 'HEADER');
    const mMCountValue: Variable['value'] | undefined = headerPacket?.variables.find(
      ({ name }) => name === 'M_MCOUNT'
    )?.value;
    return mMCountValue;
  }
}

import type Vue from 'vue';

import { defineStore } from 'pinia';

import type { InternalBuilding } from 'typings/Building';
import type { InternalVehicle } from 'typings/Vehicle';

export const useTranslationStore = defineStore('translationUtilities', {
    state: () => ({
        LSSM: window[PREFIX] as Vue,
    }),
    getters: {
        buildings: state =>
            state.LSSM.$t('buildings') as unknown as Record<
                number,
                InternalBuilding
            >,
        vehicles: state =>
            state.LSSM.$t('vehicles') as unknown as Record<
                number,
                InternalVehicle
            >,
        vehicleBuildings(): number[] {
            return Object.entries(this.buildings)
                .filter(([, building]) => 'startVehicles' in building)
                .map(([id]) => parseInt(id.toString()));
        },
        dispatchCenterBuildings(): number[] {
            return Object.entries(this.buildings)
                .filter(
                    ([, building]) =>
                        'isDispatchCenter' in building &&
                        building.isDispatchCenter
                )
                .map(([id]) => parseInt(id.toString()));
        },
    },
});

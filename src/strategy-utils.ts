import {
  AreaRegistryEntry,
  DeviceRegistryEntry,
  EntityRegistryEntry,
  HassEntity,
} from "./config-types";

export const findStatesEntities = (
  states: States,
  domain: string,
  deviceClass?: string,
  filter?: (entity: HassEntity) => boolean
) => {
  return Object.values(states).filter(
    (entity) =>
      entity.entity_id.startsWith(`${domain}.`) &&
      (!deviceClass || entity.attributes.device_class === deviceClass) &&
      (!filter || filter(entity))
  );
};
export const findFirstStatesEntityId = (
  states: States,
  domain: string,
  deviceClass?: string,
  filter?: (entity: HassEntity) => boolean
) => findStatesEntities(states, domain, deviceClass, filter)[0]?.entity_id;

export type EntitiesByArea = { [areaId: string]: Array<EntityRegistryEntry> };
export type States = { [entityId: string]: HassEntity };

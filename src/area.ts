import { AreaRegistryEntry, EntityRegistryEntry } from "./config-types";
import { StrategyConfig } from "./strategy";
import { States, findFirstStatesEntityId } from "./strategy-utils";
import * as R from "remeda";

export type AreaConfig = {
  area: AreaRegistryEntry;
  entities: Array<EntityRegistryEntry>;
  states: States;
  icon?: string;
  entityIdsByDomain: {
    [domain: string]: Array<string>;
  };

  mainEntities: {
    light?: string;
    motion?: string;
    temperature?: string;
  };
};

export const configFactory = (
  areas: Array<AreaRegistryEntry>,
  entities: Array<EntityRegistryEntry>,
  states: States,
  areasConfig: StrategyConfig["areas"]
): Array<AreaConfig> => {
  return areas
    .filter((area) => !area.area_id.startsWith("sonos_"))
    .map((area) => {
      const areaEntities = entities.filter(
        (entity) => entity.area_id === area.area_id
      );
      const areaStates = Object.fromEntries(
        Object.entries(states).filter(([entityId]) =>
          areaEntities.some((entity) => entity.entity_id === entityId)
        )
      );

      let entityIdsByDomain: {
        [domain: string]: Array<string>;
      } = Object.fromEntries(domains.map((domain) => [domain, []]));
      entityIdsByDomain = areaEntities
        .map((entity) => ({
          domain: entity.entity_id.split(".")[0],
          entity,
        }))
        .reduce((acc, { domain, entity }) => {
          return {
            ...acc,
            [domain]: [...(acc[domain] || []), entity.entity_id],
          };
        }, entityIdsByDomain);

      const motionEntityId =
        findFirstStatesEntityId(states, "binary_sensor", "motion") ||
        findFirstStatesEntityId(states, "binary_sensor", "occupancy") ||
        findFirstStatesEntityId(states, "binary_sensor", "presence");

      const lightEntityId = R.find(entityIdsByDomain["light"], (entityId) =>
        /group/i.test(states[entityId].attributes.icon || "")
      );
      const temperatureEntityId = findFirstStatesEntityId(
        states,
        "sensor",
        "temperature"
      );

      entityIdsByDomain["sensor"] = entityIdsByDomain["sensor"].filter(
        (entityId) =>
          ![undefined, "enum"].includes(
            states[entityId].attributes.device_class
          )
      );

      return {
        area,
        entities: areaEntities,
        states: areaStates,
        icon: areasConfig?.[area.area_id]?.icon,
        entityIdsByDomain,
        mainEntities: {
          light: lightEntityId,
          motion: motionEntityId,
          temperature: temperatureEntityId,
        },
      };
    });
};

const domains = [
  "light",
  "switch",
  "input_boolean",
  "input_number",
  "input_select",
  "input_text",
  "input_datetime",
  "scene",
  "script",
  "automation",
  "cover",
  "fan",
  "media_player",
  "lock",
  "climate",
  "humidifier",
  "person",
  "number",
  "select",
  "template",
  "update",
  "camera",
  "sensor",
  "binary_sensor",
  "thermostat",
  "weather",
  "plant",
];

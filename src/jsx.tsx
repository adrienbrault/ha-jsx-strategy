import { AlarmPanelCardConfig } from "./cards/alarm-panel";
import { AreaCardConfig } from "./cards/area";
import { ButtonCardConfig } from "./cards/button";
import { CalendarCardConfig } from "./cards/calendar";
import { ConditionalCardConfig } from "./cards/conditional";
import { EntitiesCardConfig } from "./cards/entities";
import { EntityCardConfig } from "./cards/entity";
import { EntityFilterCardConfig } from "./cards/entity-filter";
import { GaugeCardConfig } from "./cards/gauge";
import { GlanceCardConfig } from "./cards/glance";
import { GridCardConfig } from "./cards/grid";
import { HistoryGraphCardConfig } from "./cards/history-graph";
import { HumidifierCardConfig } from "./cards/humidifier";
import { WebpageCardConfig } from "./cards/iframe";
import { LightCardConfig } from "./cards/light";
import { LogbookCardConfig } from "./cards/logbook";
import { MapCardConfig } from "./cards/map";
import { MarkdownCardConfig } from "./cards/markdown";
import { MediaControlCardConfig } from "./cards/media-control";
import { ChipsCardConfig as MushroomChipsCardConfig } from "./cards/mushroom/chips";
import { AlarmPanelCardConfig as MushroomAlarmPanelCardConfig } from "./cards/mushroom/alarm-control-panel";
import { ClimateCardConfig as MushroomClimateCardConfig } from "./cards/mushroom/climate";
import { CoverCardConfig as MushroomCoverCardConfig } from "./cards/mushroom/cover";
import { TitleCardConfig as MushroomTitleCardConfig } from "./cards/mushroom/title";
import { EntityCardConfig as MushroomEntityCardConfig } from "./cards/mushroom/entity";

import { FanCardConfig as MushroomFanCardConfig } from "./cards/mushroom/fan";
import { HumidifierCardConfig as MushroomHumidiferCardConfig } from "./cards/mushroom/humidifier";
import { LightCardConfig as MushroomLightCardConfig } from "./cards/mushroom/light";
import { LockCardConfig as MushroomLockCardConfig } from "./cards/mushroom/lock";
import { MediaPlayerCardConfig as MushroomMediaPlayerCardConfig } from "./cards/mushroom/media-player";
import { NumberCardConfig as MushroomNumberCardConfig } from "./cards/mushroom/number";
import { PersonCardConfig as MushroomPersonCardConfig } from "./cards/mushroom/person";
import { SelectCardConfig as MushroomSelectCardConfig } from "./cards/mushroom/select";
import { TemplateCardConfig as MushroomTemplateCardConfig } from "./cards/mushroom/template";
import { UpdateCardConfig as MushroomUpdateCardConfig } from "./cards/mushroom/update";

import { PictureCardConfig } from "./cards/picture";
import { PictureElementsCardConfig } from "./cards/picture-elements";
import { PictureEntityCardConfig } from "./cards/picture-entity";
import { PictureGlanceCardConfig } from "./cards/picture-glance";
import { PlantStatusCardConfig } from "./cards/plant-status";
import { SensorCardConfig } from "./cards/sensor";
import { StatisticCardConfig } from "./cards/statistic";
import { StatisticsGraphCardConfig } from "./cards/statistics-graph";
import { ThermostatCardConfig } from "./cards/thermostat";
import { TileCardConfig } from "./cards/tile";
import { WeatherForecastCardConfig } from "./cards/weather-forecast";

export function elementToConfig(type, props, ...children) {
  if (props) {
    // jsx doesn't like attributes that start with a number, so those are prefixed with an underscore
    // we need to remove that underscore
    props = Object.entries(props).reduce((acc, [key, value]) => {
      if (/^_/.test(key)) {
        key = key.replace("_", "");
      }
      return { ...acc, [key]: value };
    }, {});
  }

  let card = {};
  if (typeof type === "function") {
    card = type(props);
  }
  if (typeof type === "string") {
    card = { type };
    if (props && Object.keys(props).length > 0) {
      card = {
        ...card,
        ...props,
      };
    }
  }

  if (children.length > 0) {
    card = {
      ...card,
      cards: children,
    };
  }
  if (/^custom-/.test(card.type as string)) {
    card = {
      ...card,
      type: `${card.type.replace("custom-", "custom:")}`,
    };
  }

  return card;
}

export function configToJsx(config: { [key: string]: any }) {
  const children = (config.cards || config.views || [])
    .map(configToJsx)
    .join("");
  const props = Object.entries(config)
    .filter(([key]) => !["cards", "type", "views"].includes(key))
    .map(([key, value]) => {
      if (/^[0-9]/.test(key)) {
        // because jsx doesn't like attributes that start with a number, we prefix them with an underscore
        key = `_${key}`;
      }

      // if scalar use foo="scalar" format
      if (typeof value === "string" || typeof value === "number") {
        return `${key}="${value}"`;
      }

      if (typeof value === "object" && "type" in value) {
        return `${key}={${configToJsx(value)}}`;
      }

      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");
  let tagName: string = (config.type || "div").replace(":", "-");

  if (children.length === 0) {
    return `<${tagName} ${props}/>`;
  }

  return `<${tagName} ${props}>${children}</${tagName}>`;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      area: Omit<AreaCardConfig, "type">;
      "alarm-panel": Omit<AlarmPanelCardConfig, "type">;
      button: Omit<ButtonCardConfig, "type">;
      calendar: Omit<CalendarCardConfig, "type">;
      conditional: Omit<ConditionalCardConfig, "type">;
      entities: Omit<EntitiesCardConfig, "type">;
      entity: Omit<EntityCardConfig, "type">;
      "entity-filter": Omit<EntityFilterCardConfig, "type">;
      gauge: Omit<GaugeCardConfig, "type">;
      glance: Omit<GlanceCardConfig, "type">;
      grid: Omit<Omit<GridCardConfig, "type">, "cards">;
      "history-graph": Omit<HistoryGraphCardConfig, "type">;
      humidifier: Omit<HumidifierCardConfig, "type">;
      iframe: Omit<WebpageCardConfig, "type">;
      light: Omit<LightCardConfig, "type">;
      logbook: Omit<LogbookCardConfig, "type">;
      map: Omit<MapCardConfig, "type">;
      markdown: MarkdownCardConfig;
      "media-control": Omit<MediaControlCardConfig, "type">;
      picture: Omit<PictureCardConfig, "type">;
      "picture-elements": Omit<PictureElementsCardConfig, "type">;
      "picture-entity": Omit<PictureEntityCardConfig, "type">;
      "picture-glance": Omit<PictureGlanceCardConfig, "type">;
      "plant-status": Omit<PlantStatusCardConfig, "type">;
      sensor: Omit<SensorCardConfig, "type">;
      "shopping-list": any;
      statistic: Omit<StatisticCardConfig, "type">;
      "statistics-graph": Omit<StatisticsGraphCardConfig, "type">;
      thermostat: Omit<ThermostatCardConfig, "type">;
      tile: Omit<TileCardConfig, "type">;
      "weather-forecast": Omit<WeatherForecastCardConfig, "type">;
      "vertical-stack": any;
      "horizontal-stack": any;
      "custom-bubble-card": any;

      "custom-mushroom-alarm-control-panel-card": Omit<
        MushroomAlarmPanelCardConfig,
        "type"
      >;
      "custom-mushroom-chips-card": Omit<MushroomChipsCardConfig, "type">;
      "custom-mushroom-climate-card": Omit<MushroomClimateCardConfig, "type">;
      "custom-mushroom-cover-card": Omit<MushroomCoverCardConfig, "type">;
      "custom-mushroom-entity-card": Omit<MushroomEntityCardConfig, "type">;
      "custom-mushroom-fan-card": Omit<MushroomFanCardConfig, "type">;
      "custom-mushroom-humidifier-card": Omit<
        MushroomHumidiferCardConfig,
        "type"
      >;
      "custom-mushroom-light-card": Omit<MushroomLightCardConfig, "type">;
      "custom-mushroom-lock-card": Omit<MushroomLockCardConfig, "type">;
      "custom-mushroom-media-player-card": Omit<
        MushroomMediaPlayerCardConfig,
        "type"
      >;
      "custom-mushroom-number-card": Omit<MushroomNumberCardConfig, "type">;
      "custom-mushroom-person-card": Omit<MushroomPersonCardConfig, "type">;
      "custom-mushroom-select-card": Omit<MushroomSelectCardConfig, "type">;
      "custom-mushroom-template-card": Omit<MushroomTemplateCardConfig, "type">;
      "custom-mushroom-title-card": Omit<MushroomTitleCardConfig, "type">;
      "custom-mushroom-update-card": Omit<MushroomUpdateCardConfig, "type">;

      [key: string]: any;
    }
  }
}

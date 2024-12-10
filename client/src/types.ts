import { DashedLine, DottedLine, SolidLine } from "./assets/icons";

// constants
export const BACKGROUND_COLORS = [
  "transparent",
  "rgb(255, 201, 201)",
  "rgb(178, 242, 187)",
  "rgb(165, 216, 255)",
  "rgb(255, 236, 153)",
];
export type BACKGROUND_COLORS_TYPE = (typeof BACKGROUND_COLORS)[keyof typeof BACKGROUND_COLORS];

export const STROKE_COLORS = [
  "rgb(30, 30, 30)",
  "rgb(224, 49, 49)",
  "rgb(47, 158, 68)",
  "rgb(25, 113, 194)",
  "rgb(240, 140, 0)",
];
export type STROKE_COLORS_TYPE = (typeof STROKE_COLORS)[keyof typeof STROKE_COLORS];

export const CANVAS_BACKGROUND = [
  "rgb(255, 201, 201)",
  "rgb(178, 242, 187)",
  "rgb(165, 216, 255)",
  "rgb(255, 236, 153)",
];
export type CANVAS_BACKGROUND_TYPE = (typeof CANVAS_BACKGROUND)[keyof typeof CANVAS_BACKGROUND];

export const STROKE_STYLES = [
  {
    slug: "solid",
    icon: SolidLine,
  },
  {
    slug: "dashed",
    icon: DashedLine,
  },
  {
    slug: "dotted",
    icon: DottedLine,
  },
];

// tools
export type Point = {
  x: number,
  y: number
};

export type Stroke = {
  color: STROKE_COLORS_TYPE, 
  width: number,
  style: string, // TODO: think of appropriate values and type
};

export type Background = {
  color: BACKGROUND_COLORS_TYPE,
  style: string, // TODO: think of appropriate values and type
};

export const Tool = {
  hand: "hand",
  selection: "selection",
  rectangle: "rectangle",
  diamond: "diamond",
  circle: "circle",
  line: "line",
  arrow: "arrow",
  text: "text",
  pencil: "pencil",
  picture: "picture",
  erase: "erase",
};

export type Element = {
  id: string,
  type: (typeof Tool)[keyof typeof Tool],
  point_1: Point,
  point_2: Point,
  opacity?: number,
  stroke?: Stroke,
  background?: Background,
  text?: Text,
  offset: Point,
};

// extras
export type Session = null | string;

// controls
export type Scale = number;
export type Lock = boolean;

// actions
export type Action = 'Writing' | 'Drawing' | 'Resizing' | 'Moving' | 'None' | 'Panning';
//大小
export type Size = number | string | "small" | "medium" | "large";
//填充模式
export type Fit = "contain" | "cover" | "fill" | "none" | "scale-down";

//形状
export enum Shape {
  Circle = "circle",
  Square = "square",
}

export interface AvatarProps {
  icon?: string;
  size?: Size;
  fit?: Fit;
  shape?: Shape;
  src: string;
  alt?: string;
}

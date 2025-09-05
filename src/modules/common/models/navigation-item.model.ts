import { JSX } from "react";

export interface NavigationItemModel {
  id: number;
  url: string;
  isDisabled: boolean;
  name: string;
  icon?: JSX.Element;
}

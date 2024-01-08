// Exclude는 뒤에오는 타입을 제외하겠다는 건데
// AsProps에서는 IntrinsicElements에서 svg타입들을 제외하고 받겠다는 말이다.

import { vars } from "@hojoon/themes";
import { StyleSprinkles } from "./style.css";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HtmlHTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color: keyof typeof vars.colors.$scale & string;
  background: keyof typeof vars.colors.$scale & string;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;

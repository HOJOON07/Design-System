// import * as React from "react";
// import { ButtonProps } from "./types";
// import { clsx } from "clsx";
// import {
//   activeColorVariant,
//   buttonStyle,
//   enableColorVariant,
//   hoverColorVariant,
//   spinnerStyle,
// } from "./style.css";
// import { vars } from "@hojoon/themes";
// import { assignInlineVars } from "@vanilla-extract/dynamic";

// const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
//   const {
//     children,
//     variant = "solid",
//     size = "md",
//     color = "gray",
//     isDisabled = false,
//     style,
//     leftIcon,
//     rightIcon,
//     isLoading,
//     onKeyDown,
//   } = props;

//   const enableColor = vars.colors.$scale[color][500];
//   const hoverColor =
//     variant === "solid"
//       ? vars.colors.$scale[color][600]
//       : vars.colors.$scale[color][50];

//   const activeColor =
//     variant === "solid"
//       ? vars.colors.$scale[color][700]
//       : vars.colors.$scale[color][100];

//   const disabled = isDisabled || isLoading;

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
//     onKeyDown?.(e);

//     if (e.key === "Enter" || e.key === "13") {
//       e.preventDefault();
//       e.currentTarget.click();
//     }
//   };

//   return (
//     <button
//       // 기능
//       {...props}
//       onKeyDown={handleKeyDown}
//       role="button"
//       data-loading={isLoading}
//       disabled={disabled}
//       ref={ref}
//       // 디자인
//       className={clsx([
//         buttonStyle({
//           size,
//           variant,
//         }),
//       ])}
//       style={{
//         ...assignInlineVars({
//           [enableColorVariant]: enableColor,
//           [hoverColorVariant]: hoverColor,
//           [activeColorVariant]: activeColor,
//         }),
//         ...style,
//       }}
//     >
//       {isLoading && <div className={spinnerStyle({ size })}></div>}
//       {leftIcon && <span>{leftIcon}</span>}
//       <span>{children}</span>
//       {rightIcon && <span>{rightIcon}</span>}
//     </button>
//   );
// };

// const _Button = React.forwardRef(Button);

// export { _Button as Button };

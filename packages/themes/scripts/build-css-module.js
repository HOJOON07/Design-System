import * as theme from "../dist/index.js";
import fs from "fs";

// theme.css
// root: {
//  --gray-900: #171923
// }

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};

const generateThemeCssVariables = () => {
  //여기다가 for 루프 돌린거를 푸쉬해준다.
  const cssString = [];

  Object.entries(theme.vars).forEach(([key, value]) => {
    // key 가 color인 경우에
    if (key === "colors") {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        //ligth인 경우
        if (colorKey === "light") {
          const selector = ":root";

          const cssVariables = Object.entries(colorValue)
            // 각각 key들을 뽑아서
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subKey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subKey
                    )}: ${subValue};`
                )
                // 줄바꿈 해줘서 푸쉬해줌
                .join("\n")
            )
            .join("\n");

          return cssString.push(`${selector} {\n${cssVariables}\n}`);
        }

        if (colorKey === "dark") {
          const selector = ":root .theme-dark";

          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subKey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subKey
                    )}: ${subValue};`
                )
                .join("\n")
            )
            .join("\n");

          return cssString.push(`${selector} {\n${cssVariables}\n}`);
        }
      });

      return;
    }
    // 타이포 그라피
    const selector = ":root";

    const cssVariables = Object.entries(value)
      .map(([mainKey, mainValue]) =>
        Object.entries(mainValue)
          .map(
            ([subKey, subValue]) =>
              `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`
          )
          .join("\n")
      )
      .join("\n");

    return cssString.push(`${selector} {\n${cssVariables}\n}`);
  });
  return cssString;
};

// .headingxl {
//   font-size: 3rem;
//   font-weight: 700;
//   line-height: 100%;
// }

const generateThemeCssClasses = () => {
  const cssString = [];

  Object.entries(theme.classes).forEach(([, value]) => {
    const cssClasses = Object.entries(value)
      .map(([mainKey, mainValue]) =>
        Object.entries(mainValue)
          .map(([subKey, subValue]) => {
            const className = `.${toCssCasting(mainKey)}${toCssCasting(
              subKey
            )}`;

            const styleProperties = Object.entries(subValue)
              .map(
                ([styleKey, styleValue]) =>
                  `${toCssCasting(styleKey)}: ${styleValue};`
              )
              .join("\n");

            return `${className} {\n${styleProperties}\n}`;
          })
          .join("\n")
      )
      .join("\n");

    cssString.push(cssClasses);
  });

  return cssString;
};

const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  const classes = generateThemeCssClasses();

  fs.writeFileSync("./dist/themes.css", [...variables, ...classes].join("\n"));
};

generateThemeCss();

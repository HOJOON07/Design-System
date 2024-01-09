// props를 전달해주고
// spinkles에 해당하는 프롭스만 추출해주는 함수를 만듬
export const extractSprinkleProps = <T extends Object>(
  props: T,
  keys: (keyof T)[],
) => {
  const result: any = {};

  keys.forEach((key) => {
    if (props?.[key]) {
      result[key] = props[key];
    }
  });
  return result;
};

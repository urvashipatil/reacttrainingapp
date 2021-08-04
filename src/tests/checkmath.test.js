import * as appMath from "../checkMath";
import * as math from "../myMath.js";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math Add", () => {
  let result = appMath.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

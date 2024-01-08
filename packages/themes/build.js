import run from "@hojoon/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});

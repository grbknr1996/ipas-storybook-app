import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript(), postcss()],
  },
  {
    input: "src/index.ts", // This should cover all type exports
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

/*
  eslint-config-next 16 exports flat configs already. Wrapping them in
  FlatCompat, as the older create-next-app template does, makes ESLint try to
  serialise a plugin object that references itself and it dies with
  "Converting circular structure to JSON". Spread them directly instead.
*/
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

export default [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescript,
];

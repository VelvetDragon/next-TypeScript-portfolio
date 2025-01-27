import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables rule
      "@typescript-eslint/no-unused-vars": "off",
      // Disable exhaustive deps rule for useEffect
      "react-hooks/exhaustive-deps": "off",
      // Disable explicit any rule
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-const": "off"
    },
  },
];

export default eslintConfig;

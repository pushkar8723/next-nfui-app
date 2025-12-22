import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...nextVitals,
    ...nextTs,
    prettierRecommended,
    {
        rules: {
            "prettier/prettier": ["error", { tabWidth: 4 }],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;

import type { Linter } from "eslint";
import globals from "globals";

export async function javascript(): Promise<Linter.Config[]> {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.node,
          ...globals.browser,
          ...globals.es2023,
          window: "readonly",
          document: "readonly",
          navigator: "readonly",
        },
        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: "latest",
          sourceType: "module",
        },
        sourceType: "module",
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      name: "purea/javascript/setup",
    },
    {},
  ];
}

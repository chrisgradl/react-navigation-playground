export const formatCode = (code: string): Promise<string> => {
  return Promise.all([
    require("prettier/standalone"),
    require("prettier/parser-babel"),
  ]).then(([prettier, babylonParser]) =>
    prettier.format(code, {
      parser: "babel",
      plugins: [babylonParser],
      semi: true,
      singleQuote: true,
    })
  );
};

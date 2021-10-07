import React from "react";
import createCodeSnippet from "../createCodeSnippet";
import { TemplateDrawer, TemplateTabs } from "../../../data/Templates";

it("should convert Drawer Template to CodeSnippet", async () => {
  const code = await createCodeSnippet(TemplateDrawer as any);
  expect(code).toBeDefined();
  console.log(code);
});

it("should convert Tab Template to CodeSnippet", async () => {
  const code = await createCodeSnippet(TemplateTabs as any);
  expect(code).toBeDefined();
  console.log(code);
});

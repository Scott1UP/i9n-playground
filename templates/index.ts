import { buttonTemplate } from "./button";
import { checkboxTemplate } from "./checkbox";
import { dropdownTemplate } from "./dropdown";

export const templates = {
  Button: buttonTemplate,
  Checkbox: checkboxTemplate,
  Dropdown: dropdownTemplate,
} as const;

export type TemplateName = keyof typeof templates;

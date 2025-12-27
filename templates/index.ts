import { buttonTemplate } from "./button";
import { checkboxTemplate } from "./checkbox";
import { collapsibleTemplate } from "./collapsible";
import { dialogTemplate } from "./dialog";
import { dropdownTemplate } from "./dropdown";
import { inputTemplate } from "./input";
import { progressTemplate } from "./progress";
import { sliderTemplate } from "./slider";
import { switchTemplate } from "./switch";
import { tabsTemplate } from "./tabs";
import { toastTemplate } from "./toast";
import { toggleGroupTemplate } from "./toggle-group";
import { tooltipTemplate } from "./tooltip";

export const templates = {
  Button: buttonTemplate,
  Checkbox: checkboxTemplate,
  Collapsible: collapsibleTemplate,
  Dialog: dialogTemplate,
  Dropdown: dropdownTemplate,
  Input: inputTemplate,
  Progress: progressTemplate,
  Slider: sliderTemplate,
  Switch: switchTemplate,
  Tabs: tabsTemplate,
  Toast: toastTemplate,
  "Toggle Group": toggleGroupTemplate,
  Tooltip: tooltipTemplate,
} as const;

export type TemplateName = keyof typeof templates;

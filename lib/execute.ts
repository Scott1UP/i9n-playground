import React from "react";
import { Button } from "@base-ui/react/button";
import { Checkbox } from "@base-ui/react/checkbox";
import { Collapsible } from "@base-ui/react/collapsible";
import { Dialog } from "@base-ui/react/dialog";
import { Input } from "@base-ui/react/input";
import { Menu } from "@base-ui/react/menu";
import { Progress } from "@base-ui/react/progress";
import { Slider } from "@base-ui/react/slider";
import { Switch } from "@base-ui/react/switch";
import { Tabs } from "@base-ui/react/tabs";
import { Toast } from "@base-ui/react/toast";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Tooltip } from "@base-ui/react/tooltip";

export function executeCode(
  transpiledCode: string
): { Component: React.ComponentType | null; error: string | null } {
  try {
    // Create a function that returns the component
    // We inject React and the base-ui components as dependencies
    const fn = new Function(
      "React",
      "Button",
      "Checkbox",
      "Collapsible",
      "Dialog",
      "Input",
      "Menu",
      "Progress",
      "Slider",
      "Switch",
      "Tabs",
      "Toast",
      "Toggle",
      "ToggleGroup",
      "Tooltip",
      transpiledCode
    );

    const Component = fn(
      React,
      Button,
      Checkbox,
      Collapsible,
      Dialog,
      Input,
      Menu,
      Progress,
      Slider,
      Switch,
      Tabs,
      Toast,
      Toggle,
      ToggleGroup,
      Tooltip
    );

    if (typeof Component !== "function") {
      return {
        Component: null,
        error: "The code did not return a valid React component",
      };
    }

    return { Component, error: null };
  } catch (err) {
    return {
      Component: null,
      error: err instanceof Error ? err.message : "Execution failed",
    };
  }
}

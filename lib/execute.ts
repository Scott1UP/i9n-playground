import React from "react";
import { Button } from "@base-ui/react/button";
import { Checkbox } from "@base-ui/react/checkbox";
import { Menu } from "@base-ui/react/menu";

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
      "Menu",
      transpiledCode
    );

    const Component = fn(
      React,
      Button,
      Checkbox,
      Menu
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

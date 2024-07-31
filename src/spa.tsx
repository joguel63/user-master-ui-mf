import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("primer-hijo")!,
});

const cssLifecycles = cssLifecycleFactory("spa");

export const bootstrap = [cssLifecycles.bootstrap, lifecycles.bootstrap];
export const mount = [cssLifecycles.mount, lifecycles.mount];
export const unmount = [cssLifecycles.unmount, lifecycles.unmount];

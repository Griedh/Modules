import { createHelloWorld } from "remote/helloWorld";

const root = document.querySelector<HTMLElement>("#app");

if (!root) {
  throw new Error("Could not find the host app root element.");
}

root.append(createHelloWorld());

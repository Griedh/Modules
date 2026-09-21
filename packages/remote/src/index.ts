import { createHelloWorld } from "./hello-world";

const root = document.querySelector<HTMLElement>("#app");

if (root) {
  root.append(createHelloWorld("Remote App"));
}

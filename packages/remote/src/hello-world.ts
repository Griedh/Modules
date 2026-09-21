export function createHelloWorld(name = "Module Federation"): HTMLElement {
  const message = document.createElement("h1");
  message.textContent = `Hello, ${name}!`;
  message.dataset.source = "remote";
  return message;
}

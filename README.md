# TypeScript Module Federation Hello World

A minimal, framework-free example of [webpack Module Federation](https://webpack.js.org/concepts/module-federation/) using TypeScript. The example contains two independently built applications:

- **remote** (port `3001`) exposes a typed `createHelloWorld` function.
- **host** (port `3000`) loads that function at runtime and mounts the returned element.

## Run the example

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Both development servers support hot reload, while the host fetches the remote container from `http://localhost:3001/remoteEntry.js`.

## Useful commands

```bash
npm run typecheck  # Check both TypeScript projects
npm run build      # Create production bundles in each package's dist directory
```

## How it works

The remote's webpack configuration publishes `src/hello-world.ts` under the public module name `remote/helloWorld`. The host declares that remote module in its own webpack configuration and uses a small ambient declaration to retain type safety. Keeping the host startup in an asynchronous `bootstrap.ts` file gives webpack time to initialize the remote container before the federated import runs.

# Lerna | Next Starter Kit

Basic Lerna/Next.js starter kit with TS, Tailwind, Styleguidist and Storybook.

Two basic packages are included:

- `ui`: Common set of basic UI components. Reused across applications. Buttons, tabs, inputs, etc.
- `web`: Main web Next.js application.

## Basic Usage

**Make sure you update the package names in each of the `packages` `package.json` file. Default is set to `@myapp/{package_name}`.**

Get all the `packages/` setup by running:

```bash
npx lerna bootstrap
```

### Conventional Commits

The project utilizes [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). I recommend installing a plugin for your editor.

[VSCode](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)



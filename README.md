# @xobj

[![Build](https://github.com/superman2211/xobj/workflows/build/badge.svg)](https://github.com/superman2211/xobj/actions/workflows/build.yml)

This project makes it possible to use a compact universal binary data format for JavaScript objects.

Packages:
| Package | Version | Downloads | Description |
|---------|---------|-----------|-------------|
| [@xobj/buffer](packages/buffer) | [![npm](https://badge.fury.io/js/@xobj%2Fbuffer.svg)](https://badge.fury.io/js/@xobj%2Fbuffer) | [![Downloads](https://img.shields.io/npm/dw/auph)](https://www.npmjs.com/package/@xobj/buffer) | Buffer for **Browser** and **NodeJS**. Writing and reading basic types to binary data. |
| [@xobj/core](packages/core) | [![npm](https://badge.fury.io/js/@xobj%2Fcore.svg)](https://badge.fury.io/js/@xobj%2Fcore) | [![Downloads](https://img.shields.io/npm/dw/auph)](https://www.npmjs.com/package/@xobj/core) | Decoding and encoding **JavaScript** / **TypeScript** / **JSON** objects to binary format. |

[Buffer documentation](packages/buffer)

[Object encoding documentation](packages/core)

Samples:
| Package | Description |
|---------|-------------|
| [rollup-sample](samples/rollup-sample) | Sample with **rollup** bundling |
| [rollup-external-sample](samples/rollup-external-sample) | Sample with external **rollup** bundling |
| [browser-sample](samples/browser-sample) | Sample for **browser** |
| [nodejs-sample](samples/nodejs-sample) | Sample for **nodejs** |

## Development
Install all dependencies
```shell
yarn
```

Build all projects
```shell
yarn build
```

Test all projects
```shell
yarn test
```

Generate coverage report
```shell
yarn coverage
```

Check code quality
```shell
yarn lint
```

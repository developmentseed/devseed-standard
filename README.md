# devseed-standard

> Need to change config rules? See [eslint-config-devseed-standard](https://github.com/developmentseed/eslint-config-devseed-standard)

## Install

```sh
npm i -D devseed-standard
```

## ESlint config file

Create a .eslintrc file:

```json
{
  "extends": ["devseed-standard"]
}
```

## Cli Usage

Add an npm script:

```
"scripts": {
  "lint": "devseed-standard"
},
```

Run the script:

```
npm run lint
```

## Ignoring files

In the project's package.json file:

```json
"devseed-standard": {
  "ignore": [
    "**/whatever/files/"
  ]
}
```

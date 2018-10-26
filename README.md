# React Starter
Yet another react eco starter using babel 7, react 16, react router dom 4, eslint, webpack 4, ava+nyc
bootstrap, font awesome, etc

### Usage

Install dependencies

```
$ yarn
```

Run development server

```
$ yarn start
```

### Building

```
$ yarn build
```

Will create a `dist` directory containing your compiled code.

Depending on your needs, you might want to do more optimization to the production build.

## Webpack Bundle Analyzer

Run in development

```
$ yarn dev
```

Run on the production oprimized build

```
$ yarn deploy
```
## Generate Page or Component

```
$ yarn generate
```

## directory explaination

1. ```./bin``` contains building scripts
2. ```./src``` contains source code
  2.1 ```./src/assets``` contains pictures, static files etc. <br />
  2.2 ```./src/components``` contains components which are project independent<br />
  2.3 ```./src/layouts``` contains the project screen overall layout, this is the wrapper of all pages<br />
  2.4 ```./src/pages``` contains pages or screens for different features<br />
    2.4.1 ```./src/pages/containers/``` contains individual redux actions within a page<br />
  2.5 ```./sagas, ./services, ./styles``` are name revealing.<br />


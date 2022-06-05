# learn_storybook
## Think of the Test strategy
- Static Test 
  - TypeScript, ESLint, Stylelint
  - first of all, must set up a static test enviroment
- Unit Test 
  - Jest, Vitest
  - to run a test for custom hooks or a component
  - as documentation
- Integration Test 
  - React Testing Library
- E2E Test  
  - Playwright

## Usage 
install dependencies
```shell
$ yarn
```

develop ui components with storybook
```shell
$ yarn storybook
```

lint code with eslint 
```shell
$ yarn run lint
```

format code with prettier
```shell
$ yarn run prettier
```

lint code with stylelint
```shell
$ yarn run stylelint
```
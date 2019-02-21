# : The JavaScript Joel test

# note:

- has a readme
- use prettier
- typing:
  - (flow/typescript)
  - type declaration file
  - flow/ts definitions
  - check anotations
- linting / modern eslint
- circular dependency check
- code organisation
- continous integration :
  - travis / jenkins
  - one click auto release
- test :
  - kill mocha / use jest
- code coverage
- package.json :
  - node version fixed in package.json
  - licence specified
  - website specified
  - script commands available :
    - start
    - build
    - test
    - lint
    - coverage
    - clean
    - dependencies
    - circular-dependencies
- node version
  - up to date
  - LTS
- packages up to date
- project structure :
  - mock
  - src
  - dist/build => is in git ignore
  - existing src/package.json

NEGATIVE POINTS :

- use flow
- use mocha
- node modules commited

TYPES :

- cli :
  - todo
- api :
  - e2e tests (supertest)
- front :
  - component testing (jasmine ?)

## ideas :

https://developer.github.com/apps/building-github-apps/creating-a-github-app/

## other modules solutions

https://www.npmjs.com/package/module-alias
https://github.com/ilearnio/module-alias

https://www.npmjs.com/package/@ef-carbon/tspm
https://www.npmjs.com/package/tspath
https://github.com/joonhocho/tscpaths
https://www.npmjs.com/package/tsconfig-paths

https://github.com/Microsoft/TypeScript/issues/10866#issuecomment-453016049

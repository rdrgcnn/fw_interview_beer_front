# Codebase analysis

## Introduction

During development, I noticed things that were certainely outdated, some process that can greatly be improved and some good stuffs. 

## The good stuff

To start easy let's talk about the good stuff. First the usage of Docker for the API, it ensure a coherent environment for devs as well as an easy way to work offline mocking perfectly what the true API would be. 

The frontend project is also in a good condition in terms of configuration, Vite ease the dev process as well as the build.

## The bad stuff

### React Redux

The use of React Redux is clearly not today's state of the art frontend development. The usage of Saga resolves some bumpers for devs creating routines for fetching data, but the downside is that the frontend developer still end up writing a lot of code in order to create one command (here, `rateBeer`) between Saga, Action(s) and potentially Reducers and Selectors.
Today's modern React app do not need to use Redux anymore.

### API Style 
The API to play with data is stored in `./redux/state/{name of api}/{name of api}.api.ts`
This whole part is redundant for any API used by the frontend devs, this can greatly be improved by generating this code based on the swagger file using a tool like [SwaggerJS](https://github.com/swagger-api/swagger-js)

### General insights
#### Form 
The Form component seems very complicated achieving not enough, whenever an API call is erroring no feedback is given to the user, nor is the possibility to try again.
Overall the component `<Input>` is also something that shouldn't be rewritten just to apply some styling to it, try using a component library or writing your own in a way that basic functionnality of the `<input>` do not need to be specified. 

## Improvements

Getting rid of Redux and updating React should be the long run goal, but first we should simplify the codebase. 
First easy wins would be to simplify components that shouldn't exist like `<Input>` and `<Button>`
Then probably the best would be to change the way the API is written, through code generation, keeping Redux to test all of it. 
Then updating the React version to 18, and finally converting the Redux logic into React's `useState` and `useReducer` 

To follow those improvements I would recommend writing e2e tests through Cypress, allowing to automatize the e2e testing validating every step of the improvements

Once the work is done with the improvements to ensure robustness, component and unit tests should be written.


# Defining Application State

- install ngrx store
```
npm i @ngrx/store
```

Create the root reducer.
in the `/src/app` folder, create a folder called `reducers` with an index.ts file.

```json
{
  
}
```

## Creating a branch for a Component

I want something like this:

```json
{
  counter: {
    current: 0
  }
}
```

create a new reducer file in the reducers folder called `counter.reducer.ts`

Describe the counter state there.

And then "weld" it to the application state.

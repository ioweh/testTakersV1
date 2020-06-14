Test Takers

This project was created to display the data of the test takers.

By Oleg Ilinets

## Getting started

Clone this repository:

```bash
git clone https://github.com/ioweh/testTakersV1.git
cd testTakersV1
```

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Running tests

The tests can be executed with this command:

```bash
npm run test
```

## How to reuse the code:

The compiler turns the component into a regular JavaScript class — just import it and instantiate with new:

```bash
import TestTakersList from './TestTakersList.svelte';

const app = new TestTakersList({
	target: document.body,
	props: {
	}
});
```

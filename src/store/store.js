import { writable } from 'svelte/store';

const state = {
  testTakers: writable([]),
  testTaker: writable([])
};

const getTestTakers = testTakers => {
    state.testTakers.update(old => testTakers);
};

const getTestTaker = testTaker => {
    state.testTaker.update(old => testTaker);
};

export {
    state,
    getTestTakers,
    getTestTaker
}
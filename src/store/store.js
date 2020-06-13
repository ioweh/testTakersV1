import { writable } from 'svelte/store';

const state = {
  testTakers: writable([])
};

const getTestTakers = testTakers => {
    state.testTakers.update(old => testTakers);
};

export {
    state,
    getTestTakers
}
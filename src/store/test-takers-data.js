import * as store from './store';
import { parseList } from './http-utils';
import API from './config'

export async function getTestTakersAction() {
    try {
        const response = await fetch(`${API}/users`);
        const testTakers = await parseList(response);
        store.getTestTakers(testTakers);
        return testTakers;
    } catch (error) {
        return console.log(error);
    }
}

export async function getTestTakerAction(id) {
    try {
        const response = await fetch(`${API}/user/` + id);
        const testTaker = await parseList(response);
        store.getTestTaker(testTaker);
        return testTaker;
    } catch (error) {
        return console.log(error);
    }
}
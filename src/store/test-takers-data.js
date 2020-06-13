import * as store from './store';
import { parseList } from './http-utils';
import API from './config'

export async function getTestTakersAction() {
    try {
        const response = await fetch(`${API}/users`);
        const testTakers = await parseList(response);
        store.getTestTakers(testTakers);
        console.log(testTakers);
        return testTakers;
    } catch (error) {
        return console.log(error);
    }
}
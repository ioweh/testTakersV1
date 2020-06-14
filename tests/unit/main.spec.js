// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'
import { getTestTakerAction, getTestTakersAction } from "../../src/store";

var mockedTestTaker = {
  "userId": "1",
  "login": "grahamallison",
  "password": "steel",
  "title": "ms",
  "lastName": "graham",
  "firstName": "allison",
  "gender": "female",
  "email": "allison.graham70@example.com",
  "picture": "https://randomuser.me/api/portraits/women/35.jpg",
  "address": "6697 rolling green rd colorado springs 56306"
},
  mockedTestTakers = [
    {
      "userId": 0,
      "firstName": "abigail",
      "lastName": "foster"
    },
    {
      "userId": 14,
      "firstName": "abigail",
      "lastName": "edwards"
    }];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
      mockedTestTaker
    ),
    status: 200
  })
);

test('a test taker should be received', async () => {
  await expect(getTestTakerAction(1)).resolves.toEqual(mockedTestTaker);
})

test('a list of test takers should be received', async () => {
  fetch.mockImplementationOnce(() => Promise.resolve({
    json: () => Promise.resolve(
      mockedTestTakers
    ),
    status: 200
  }));
  await expect(getTestTakersAction()).resolves.toEqual(mockedTestTakers);
})
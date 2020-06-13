// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import App from '../../src/App.svelte'

test('shows proper heading when rendered', () => {
  const { getByText } = render(App, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})


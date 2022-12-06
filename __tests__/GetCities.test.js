/* eslint-disable no-undef */

import * as cityapi from '../api/citiesApi'

test('Test appel api', () => {
  const city = cityapi.getCity('01001')
  expect(city).toBeDefined()
  // expect(city[0]).toBe("L'Abergement-Clémenciat")
})


import * as cityapi from '../api/citiesApi'

test('Ceci est mon premier test', () => {
  const city = cityapi.getCity('01001')
  expect(city).toBeDefined()
  // expect(city[0]).toBe("L'Abergement-Clémenciat")
})

/* eslint-disable no-undef */

import * as cityapi from '../api/weatherApi'

test('Test get formated days', () => {
  const day = cityapi.getDateDay('2022-12-12')
  expect(day).toBe('Mar')
})

/* global it, expect */
/*
 * Created by Thomas Hartmann
 * Test suite for results actions
 */

import { startFetchingResults, cancelFetchingResults } from './resultsActions'
import types from './resultsActionTypes'

it('should create a fetch action', () => {
  const expectedAction = { type: types.FETCH_RESULTS }
  expect(startFetchingResults()).toEqual(expectedAction)
})

it('should create a cancel fetching action', () => {
  const expectedAction = { type: types.CANCEL_FETCHING_RESULTS }
  expect(cancelFetchingResults()).toEqual(expectedAction)
})

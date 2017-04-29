/*
 * Created by Thomas Hartmann
 * This is where the app's store is configured with middleware
 * and then exported for use.
 */
import reducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

/*
 *  function for logging messages to the console
 *  every time an action is dispatched. Very useful
 *  for dev and debugging, but should be removed for
 *  deployment. Left in as a comment for easy
 *  integration on further development.
 */
 const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`Dispatching action => ${action.type}`)

  const results = store.getState().searchResults

  console.log(`

  Current booking schedule:
   === === === === ===
  Fetching: ${results.fetchingResults}
  Queued: ${results.queuedSearch}

`)
  console.groupEnd()

  result = next(action)

  return result
}

export default (initialState = {}) => applyMiddleware(thunk, consoleMessages)(createStore)(reducer, initialState)

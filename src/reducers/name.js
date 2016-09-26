import { NAME_CHANGE } from '../actions'

export default function name (state = 'Bobo', action) {
  const { type, value } = action
  switch (type) {
    case NAME_CHANGE:
      return value
    default:
      return state
  }
}

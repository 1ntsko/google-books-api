import { baseURL } from '../constant'

export const searchBook = async (term = 'harry potter') => {
  return fetch(`${baseURL}?q=${term}`).then(async (response) => Promise.resolve(await response.json())
)}

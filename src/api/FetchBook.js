import { baseURL } from '../constant'

export const fetchBook = async (id) => {
    return fetch(`${baseURL}/${id}`).then(async (response) => Promise.resolve(await response.json())
)}
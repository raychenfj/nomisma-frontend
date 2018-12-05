import axios from 'axios'
import config from '../config'

// config axios
const contractApi = config.contractApi

const instance = axios.create({
  baseURL: contractApi.baseURL,
})

/**
 * list all contracts
 */
export async function listContracts() {
  try {
    const res = await instance.get('/contracts')
    return res.data
  } catch (e) {
    console.error(e)
    return []
  }
}

/**
 * get a contract detail
 */
export async function getContract(id) {
  try {
    const res = await instance.get(`/contracts/${id}`)
    return res.data
  } catch (e) {
    console.error(e)
    return {}
  }
}

/**
 * create contract
 */
export function createContract(data) {
  return instance.post('/contracts', data)
}

/**
 * delete a contract
 */
export function deleteContract(id){
  return instance.delete(`/contracts/${id}`)
}

/**
 * update a contract
 */
export function updateContract(id, data) {
  return instance.put(`/contracts/${id}`, data)
}


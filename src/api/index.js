import axios from 'axios'

/**
 *
 * @param id
 * @return {Promise<boolean|AxiosResponse<T>>}
 */
async function getProject (id) {
  try {
    return await axios.get(`/api/project/${id}`)
  } catch (e) {
    console.error(e)
    return false
  }
}

async function saveProject (id, data) {
  try {
    return await axios.post(`/api/project/${id}`, {
      params: { data: JSON.stringify(data) }
    })
  } catch (e) {
    console.error(e)
    return false
  }
}

const api = {
  saveProject,
  getProject
}

export default api

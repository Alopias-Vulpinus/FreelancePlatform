import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
      console.log('fetching data: ', url, {method, headers, body})
      const response = await fetch(url, {method, headers, body})
      const data = await response.json()
      console.log('response Data: ', data)
      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
        
      }
      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
    }
  }, [])

  return { loading, request }
}

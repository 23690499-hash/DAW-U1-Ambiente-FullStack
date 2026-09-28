const API_URL = '/api'

export async function obtenerServicios() {
  const response = await fetch(`${API_URL}/servicios.php`, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('No fue posible obtener los servicios')
  }

  const contentType = response.headers.get('content-type')

  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('La API no devolvió información en formato JSON')
  }

  return await response.json()
}
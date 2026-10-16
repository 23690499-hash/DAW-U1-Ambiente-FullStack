
const API_URL = '/api'

export async function obtenerServicios() {
  const response = await fetch(`${API_URL}/servicios.php`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(
      response.status === 401
        ? 'Debes iniciar sesión para consultar los servicios.'
        : 'No fue posible obtener los servicios.'
    )
  }

  const contentType = response.headers.get('content-type')

  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('La API no devolvió información en formato JSON.')
  }

  return await response.json()
}

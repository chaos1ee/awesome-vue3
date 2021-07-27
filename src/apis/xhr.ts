import request from '../utils/request'

export async function getUser({
  username,
  password,
}: {
  username: string
  password: string
}) {
  return request.get(`/basic-auth/${username}/${password}`)
}

export function getStatusCode(code: number) {
  return request.get(`/status/${code}`)
}

export interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    avatar_url: string
  },
  token: string
}

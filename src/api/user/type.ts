export interface loginForm {
  name: string,
  pwd: string
}

interface dataType {
  token: string
}

export interface loginRes {
  code: number,
  data: dataType
}

interface user {
  userId: number,
  name: string,
  age: number,
  pwd: string,
  desc: string,
  roles: string[],
  button: string[],
  token: string,
  routes: string[]
}

export interface userInfoRes {
  code: number,
  data: user
}
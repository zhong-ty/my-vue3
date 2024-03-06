// import type {user} from '@/api/user/type'
function createUserList() {
  return [
    {
      userId: 1,
      name: 'www',
      age: 10,
      pwd: 'llll',
      desc: '平台管理员',
      roles: ['平台管理员'],
      button: ['cuser.detail'],
      token: 'Admin Token',
      routes: ['home']
    },
    {
      userId: 2,
      name: 'www2',
      age: 10,
      pwd: 'llll3',
      desc: '平台管理员',
      roles: ['平台管理员'],
      button: ['cuser.detail'],
      token: 'Admin Token',
      routes: ['home']
    },
    {
      userId: 3,
      name: 'www3',
      age: 10,
      pwd: 'llll4',
      desc: '平台管理员',
      roles: ['平台管理员'],
      button: ['cuser.detail'],
      token: 'Admin Token',
      routes: ['home']
    },
    {
      userId: 4,
      name: 'www5',
      age: 10,
      pwd: 'llll6',
      desc: '平台管理员',
      roles: ['平台管理员'],
      button: ['cuser.detail'],
      token: 'Admin Token',
      routes: ['home']
    }
  ]
}

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({body}) => {
      console.log('pppoooooooooo')
      const {username, pwd} = body
      const checkUser = createUserList().find(
        el => el.name === username && el.pwd == pwd
      )

      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: '密码不正确'
          }
        }
      }

      const {token} = checkUser
      return {
        code: 200,
        data: { token }
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      const checkUser = createUserList().find(
        el => el.token === token
      )

      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: 'token不正确'
          }
        }
      }

      return {
        code: 200,
        data: { checkUser }
      }
    }
  }
]
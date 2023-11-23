import { SignUpController } from './signUpController'

describe('SignUp Controller', () => {
  it('Should be return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'teste@gmail.com',
        password: '231',
        passwordConfirmation: '231'
      }
    }
    const httpResponse = sut.handler(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})

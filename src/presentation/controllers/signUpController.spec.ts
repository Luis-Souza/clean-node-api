import { MissingParamError } from '../errors/missingParamError'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { SignUpController } from './signUpController'

describe('SignUp Controller', () => {
  it('Should be return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest: HttpRequest = {
      body: {
        email: 'teste@gmail.com',
        password: '231',
        passwordConfirmation: '231'
      }
    }
    const httpResponse: HttpResponse | undefined = sut.handler(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new MissingParamError('name'))
  })

  it('Should be return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        password: '231',
        passwordConfirmation: '231'
      }
    }
    const httpResponse: HttpResponse | undefined = sut.handler(httpRequest)
    expect(httpResponse?.statusCode).toBe(400)
    expect(httpResponse?.body).toEqual(new MissingParamError('email'))
  })
})

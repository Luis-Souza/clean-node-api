import { MissingParamError } from '../errors/missingParamError'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController {
  handler (httpRequest: HttpRequest): HttpResponse | undefined {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new MissingParamError(field)
        }
      }
    }
  }
}

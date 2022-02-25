import {ErrorType} from './types'

const ErrorInterceptor = (error: ErrorType) => {
  if(error == ErrorType.RenderingError){
    // TBD: do something, like sending alert
  }
}

export class ErrorCapture {
  static error = (error: ErrorType) => {
    ErrorInterceptor(error)
    console.error(error)
  }
  static log = (error: ErrorType) => {
    ErrorInterceptor(error)
    console.log(error)
  }
  static warn = (error: ErrorType) => {
    ErrorInterceptor(error)
    console.warn(error)
  }
}
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '../core/api/base.service'
import { AuthData } from './auth-data.model'
import { LoginResponse } from './models/login-response.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    protected httpClient: HttpClient
  ) {
    super()
  }

  login(authData: AuthData) {
    this.httpClient
      .post<LoginResponse>(`${this.baseUrl}/auth`, authData)
      .subscribe(success => this.token = success.token)
  }
}

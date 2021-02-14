import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class AuthModule { }

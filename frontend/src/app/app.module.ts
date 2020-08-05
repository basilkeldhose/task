import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { UserserviceService } from './service/userservice.service';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core' 
import {RouterModule} from '@angular/router'
@NgModule({
  declarations:[
    AppComponent,
    RegisterComponent,
    MapComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAqWb4OdTKN_VU_HBKfwKzzUdssLYGm_tc'
    }),
    RouterModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

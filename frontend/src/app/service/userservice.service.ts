import { Injectable } from '@angular/core';
import {User} from '../models/user'
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  selectedUser:User={
    name:"",
    age: "" ,
    gender:"",
    location:""
    }
    constructor(private http:HttpClient) { }
    
    postUser(user:User){
    return this.http.post(environment.apiBaseUrl,user)
    }
    getuser(){
      return this.http.get(environment.apiBaseUrl)
    }
    }
    
import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../service/userservice.service'
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showmessage: boolean
  errormessage: string
  constructor(public userservice:UserserviceService, private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.userservice.postUser(form.value).subscribe(
    res => {
    this.showmessage = true;
    this.router.navigateByUrl('/map');
    setTimeout(() => this.showmessage = false, 4000);
    this.resetForm(form);
    },
    err => {
    if (err.status === 422) {
    this.errormessage = err.error.join('<br/>');
    }
    else
    this.errormessage = 'Something went wrong.Please contact admin.';
    }
    )
    }
    resetForm(form:NgForm){
    this.userservice.selectedUser={
    name:'',
    age:"",
    gender:'',
    location:'',
    };
    form.resetForm();
    this.errormessage=''
    
    }
}

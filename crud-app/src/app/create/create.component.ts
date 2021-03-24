import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm: FormGroup;

  ngOnInit() {
      this.userForm = this.fb.group({
      name: [''],
      job: ['']
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }

  submitForm() {
    this.crudService.create(this.userForm.value).subscribe(res => {
      console.log('User created!');
      this.router.navigate(['home']);
    });
  }

}
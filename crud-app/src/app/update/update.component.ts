import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  userId: number;
  name:string;
  job:string;
  user: any;

  constructor(private route: ActivatedRoute,private router: Router,public crudService: CrudService) { }

  ngOnInit() {
    this.user = {
      avatar: this.avatar,
      email: this.email,
      first_name: this.first_name,
      id: this.id,
      last_name: this.last_name
    };

    this.route.params.forEach((params: Params) => {
      this.userId = +params['userId'];
      this.crudService.getById(this.userId)
      .subscribe(response => {
        console.log(response);
        this.user = response.data;
      });
    });
  }

  onSubmit() {
    this.crudService.update(this.userId, {name : this.user.first_name, job: this.user.email})
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['home']);
      });
  }

}

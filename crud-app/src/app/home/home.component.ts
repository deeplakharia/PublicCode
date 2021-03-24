import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users = [];
  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getAll().subscribe((response)=>{
      const userResponse = response;
      this.users = userResponse.data;
    });
  }

  onDelete(userId : number){
    this.crudService.delete(userId).subscribe((response)=>{
      console.log(response);
      let index = this.users.findIndex((element, index) => {
        if (element.id === userId) {
          return true
        }
      })
      this.users.splice(index, 1);
    });
  }
}

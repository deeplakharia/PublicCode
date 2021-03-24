import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../model/user';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public user:User;
  
  constructor(public crudService: CrudService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let userId = +params['userId'];
        this.crudService.getById(userId).subscribe((response)=>{
          const userResponse = response;
          this.user = userResponse.data;
        })
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  addForm: FormGroup;

  constructor(private dbService: DbService, public formBuilder: FormBuilder) { }

  async ngOnInit() {
    this.addForm = this.formBuilder.group({
      restaurant_name: [''],
      address: [''],
      rating: [''],
      tags: [''],
      description: [''],
    })
    await this.dbService.init()
  }

  onSubmit(){
    this.dbService.addRestaurant(this.addForm.value)
    
  }
  

}

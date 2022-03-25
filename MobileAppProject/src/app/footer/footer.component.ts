import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public navCtr: NavController) {}

  ngOnInit() {}

  goToHome(){
    this.navCtr.navigateForward('Home')
  }

  goToList(){
    this.navCtr.navigateForward('List')
  }

  goToSearch(){
    this.navCtr.navigateForward('Search')
  }

  goToAbout(){
    this.navCtr.navigateForward('About')
  }

}

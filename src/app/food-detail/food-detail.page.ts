import { Component, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  food: any;
  reduce = false;
  qte = 1;
  mount: any;
  price: any;

  constructor(private route: ActivatedRoute, public service: DataService) {
    
    this.route.params.subscribe(
      (_: any) => {
         this.food = this.service.foods.filter((data: any) => data?.id == _?.id);
         this.price = this.food[0]?.price
      }
    );
  }

  ngOnInit() {
    
  }

  increase() {
    this.qte ++;
    this.mount = this.price * this.qte;
  }

  decrease() {
    this.qte >= 2 ? this.qte-- : this.qte = 1;

  }
 
}

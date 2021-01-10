import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  slides = [
    { img: '../assets/img/1.jpg'},
    { img: '../assets/img/2.jpg'},
    { img: '../assets/img/3.jpg'},
    { img: '../assets/img/4.jpg'},
    { img: '../assets/img/5.jpg'},
  ];

  foods = [
    {id: 1, img: '../assets/img/f1.jpg', price: 12.5, name: 'Donuts'},
    {id: 2, img: '../assets/img/f2.jpg', price: 25, name: 'Frites'},
    {id: 3, img: '../assets/img/f3.jpg', price: 26, name: 'Vegane'},
    {id: 4, img: '../assets/img/f4.jpg', price: 23, name: 'Broche'},
    {id: 5, img: '../assets/img/f5.jpg', price: 70, name: 'Poulet'},
    {id: 6, img: '../assets/img/f6.jpg', price: 100, name: 'Moiul'},
  ];

  categories = [
    { img: '../assets/img/waste.png', name: 'Grains'},
    { img: '../assets/img/fast-food.png', name: 'Sandwiches'},
    { img: '../assets/img/hamburger.png', name: 'Hangburger' },
    { img: '../assets/img/pizza.png', name: 'Pizza' },
    { img: '../assets/img/fast-food_1.png', name: 'Foody' },
  ];

  populars = [
    { img: '../assets/img/5.jpg', name: 'Home cooking exp', avis: 4},
    { img: '../assets/img/6.jpg', name: 'Yorhood resto', avis: 3},
    { img: '../assets/img/3.jpg', name: 'La perla', avis: 2},
    { img: '../assets/img/4.jpg', name: 'Peperon', avis: 3},
  ];

  extras = [
    { img: '../assets/img/e1.jpg', name: 'mozzarella', price: 1.00 },
    { img: '../assets/img/e2.jpg', name: 'vegetal oil', price: 2.00 },
    { img: '../assets/img/e3.png', name: 'tuna', price: 3.00 },
  ];

  nutritions = [
    { name:'Lipide', qt: 63 },
    { name:'Sugar', qt: 100 },
    { name:'Proteins', qt: 14 },
    { name:'Sugar', qt: 14 },
  
  ];


  constructor() { }
}

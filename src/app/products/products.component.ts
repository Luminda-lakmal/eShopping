import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: "PC", price: '80,000', available: 'Available',color: "Black",images:'/assets/images/images.jfif'},
    {id:2, name: "Key Board", price: '4600', available: 'Not Available',color: "Black",images:'/assets/images/images (1).jfif'},
    {id:3, name: "Mouse", price: '3000', available: 'Available',color: "White",images:'/assets/images/mouse.jfif'},
    {id:4, name: "Laptop", price: '120,000', available: 'Not Available',color: "Black",images:'/assets/images/laptop.jfif'},
    {id:5, name: "Graphic card", price: '180,000', available: 'Available',color: "White",images:'/assets/images/GraphicCard.jfif'},
    {id:6, name: "Hand Free", price: '1500', available: 'Available',color: "Black",images:'/assets/images/handFree.jfif'}
  ];
}

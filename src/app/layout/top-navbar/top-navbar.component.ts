import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private productService:productService) { }

  ngOnInit(): void {
  }

}

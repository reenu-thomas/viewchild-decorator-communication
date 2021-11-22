import { Component} from '@angular/core';
import { product } from '../model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  productInChild: product[] = [];
    constructor() {
      this.getProducts();
    }
      public getProducts() {
      this.productInChild = [
        {
          ProductId: 1,
          ArtNo: "100",
          Provider: "OppoProvider",
          ProviderArtNo: "1Yu",
          Brand: "Oppo",
          Price: 7810.23,
          BuyAccount: "123",
          SalesAccount: "321"
        },
        {
          ProductId: 1,
          ArtNo: "101",
          Provider: "OppoProvider",
          ProviderArtNo: "1Yu",
          Brand: "Oppo",
          Price: 2310.23,
          BuyAccount: "123",
          SalesAccount: "321"
        },
        {
          ProductId: 1,
          ArtNo: "102",
          Provider: "OppoProvider",
          ProviderArtNo: "1Yu",
          Brand: "Oppo",
          Price: 7810.23,
          BuyAccount: "123",
          SalesAccount: "321"
        },
        {
          ProductId: 1,
          ArtNo: "103",
          Provider: "OppoProvider",
          ProviderArtNo: "1Yu",
          Brand: "Oppo",
          Price: 5810.23,
          BuyAccount: "123",
          SalesAccount: "321"
        }
      ];
    }

}

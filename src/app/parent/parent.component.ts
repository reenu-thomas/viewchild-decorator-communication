import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { product } from '../model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent)
  child!: { productInChild: product[]; };

  constructor() { }

  productInParent: product[] = [];

  ngAfterViewInit(): void {
    this.productInParent = this.child.productInChild;
  }

}

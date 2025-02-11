import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];

  constructor(
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
    });
  }
  
  countCoffeeByType(coffees: Coffee[], attribute: string) {
    return coffees.filter((coffee) => coffee.tipo === attribute).length;
  }

}

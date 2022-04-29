import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Coffee } from '../coffee';
import faker from '@faker-js/faker';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    let coffees: Coffee[] = [];

    for (let i = 1; i <= 3; i++) {
      coffees.push(new Coffee(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence()
      ));
    }
    
    component.coffees = coffees;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has correct number of rows', () => {
    fixture.detectChanges();
    const rowDebugElements = debug.queryAll(By.css('table tr'));
    expect(rowDebugElements.length).toBe(4);
  });

});

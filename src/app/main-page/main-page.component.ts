import { Component, OnInit } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import { UpdateEvent } from '../item-list/item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  itemCards: ItemCard[] = Array<ItemCard>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: ItemCard) {
    this.itemCards.push(newItem);
    this.totalBudget += (newItem.amount * newItem.quantity);
  }

  deleteItem(item: ItemCard) {
    let index = this.itemCards.indexOf(item);
    this.itemCards.splice(index, 1);
    this.totalBudget -= (item.amount * item.quantity);
  }

  updateItem(updateEvent: UpdateEvent) {
    this.itemCards[this.itemCards.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= (updateEvent.old.amount * updateEvent.old.quantity);
    this.totalBudget += (updateEvent.new.amount * updateEvent.new.quantity);
  }
}

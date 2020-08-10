import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import { MatDialog } from '@angular/material';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {

  @Input() itemCards: ItemCard[];
  @Output() delete: EventEmitter<ItemCard> = new EventEmitter<ItemCard>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  onDeleteButtonClicked(item: ItemCard){
    this.delete.emit(item);
  }

  onCardClicked(item: ItemCard) {
    // show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px', 
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}

export interface UpdateEvent {
  old: ItemCard;
  new: ItemCard;
}

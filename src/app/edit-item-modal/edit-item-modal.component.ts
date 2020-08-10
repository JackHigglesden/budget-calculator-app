import { Component, OnInit, Inject } from '@angular/core';
import { ItemCard } from 'src/shared/models/item-card.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ItemCard) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: ItemCard) {
    this.dialogRef.close(updatedItem);
  }

}

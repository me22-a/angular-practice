import { type NewPictureData } from './../picture/picture.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-picture',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-picture.component.html',
  styleUrl: './new-picture.component.css',
})
export class NewPictureComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewPictureData>();

  enteredTitle = '';
  enteredDescription = '';
  enteredImageUrl = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSummit() {
    this.add.emit({
      title: this.enteredTitle,
      desc: this.enteredDescription,
      imgurl: this.enteredImageUrl,
      date: this.enteredDate,
    });
  }
}

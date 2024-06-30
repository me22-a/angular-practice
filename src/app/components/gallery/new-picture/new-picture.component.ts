import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-new-picture',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-picture.component.html',
  styleUrl: './new-picture.component.css',
})
export class NewPictureComponent {
  @Input({ required: true}) pictureId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredDescription = '';
  enteredImageUrl = '';
  enteredDate = '';

  private galleryService = inject(GalleryService)

  onCancel() {
    this.close.emit();
  }

  onSummit() {
    this.galleryService.addPicture({
      title: this.enteredTitle,
      desc: this.enteredDescription,
      imgurl: this.enteredImageUrl,
      date: this.enteredDate,
    });
    this.close.emit();
  }
}

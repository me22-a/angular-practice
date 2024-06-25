import { Component, inject, OnInit } from '@angular/core';
import { PictureComponent } from './picture/picture.component';
import { type NewPictureData, Picture } from './picture/picture.model';
import { NewPictureComponent } from './new-picture/new-picture.component';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [CommonModule, PictureComponent, NewPictureComponent],
})
export class GalleryComponent implements OnInit {
  isAddingPicture = false;
  gallerys: Picture[] = [];

  ngOnInit() {
    this.gallerys = this.galleryService.getGallerys();
  }

  onStartAddPicture() {
    this.isAddingPicture = true;
  }

  onCloseAddPicture() {
    this.isAddingPicture = false;
  }

  sharedService = inject(SharedService);

  constructor(private galleryService: GalleryService) {
    this.sharedService.onCreateButtonClick.subscribe(() => {
      this.onStartAddPicture();
    });
  }
}

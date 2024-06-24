import { Component, inject } from '@angular/core';
import { PictureComponent } from './picture/picture.component';
import { NewPictureData } from './picture/picture.model';
import { NewPictureComponent } from "./new-picture/new-picture.component";
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  imports: [PictureComponent, NewPictureComponent],
})
export class GalleryComponent {
  isAddingPicture = false;

  gallerys = [
    {
      id: '1',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg',
      date: '2023-06-24',
    },
  ];

  onStartAddPicture() {
    this.isAddingPicture = true;
  }

  onCancelAddPicture() {
    this.isAddingPicture = false;
  }

  onAddPicture(pictureData: NewPictureData) {
    this.gallerys.unshift({
      id: new Date().getTime().toString(),
      title: pictureData.title,
      desc: pictureData.desc,
      imgUrl: pictureData.imgurl,
      date: pictureData.date,
    });
    this.isAddingPicture = false;
  }

  sharedService = inject(SharedService);

  constructor() {
    this.sharedService.onCreateButtonClick.subscribe(() => {
      this.onStartAddPicture();
    });
  }
}

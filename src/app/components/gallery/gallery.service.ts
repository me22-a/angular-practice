import { Injectable } from '@angular/core';
import { NewPictureData } from './picture/picture.model';


@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private gallerys = [
    {
      id: '1',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
      date: '2023-06-24',
      width: 236,
      height: 421,
      transform: '',
    },
    {
      id: '2',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
      date: '2023-06-24',
    },
    {
      id: '3',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
      date: '2023-06-24',
    },
    {
      id: '4',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
      date: '2023-06-24',
    },
    {
      id: '5',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
      date: '2023-06-24',
    },
    {
      id: '6',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
      date: '2023-06-24',
    },
    {
      id: '7',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
      date: '2023-06-24',
    },
    {
      id: '8',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
      date: '2023-06-24',
    },
    {
      id: '9',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
      date: '2023-06-24',
    },
    {
      id: '10',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
      date: '2023-06-24',
    },
    {
      id: '11',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
      date: '2023-06-24',
    },
    {
      id: '12',
      title: 'Sample Picture',
      desc: 'This is a sample picture',
      imgUrl:
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
      date: '2023-06-24',
    },
  ];

  getGallerys() {
    return this.gallerys;
  }

  addPicture(pictureData: NewPictureData, id: string) {
    this.gallerys.unshift({
      id: new Date().getTime().toString(),
      title: pictureData.title,
      desc: pictureData.desc,
      imgUrl: pictureData.imgurl,
      date: pictureData.date,
    });
  }
}

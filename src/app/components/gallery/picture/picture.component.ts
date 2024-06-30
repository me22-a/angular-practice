import { Component, Input } from '@angular/core';
import { NewPictureComponent } from '../new-picture/new-picture.component';
import type { Picture } from './picture.model';


@Component({
  selector: 'app-picture',
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
  imports: [NewPictureComponent],
})
export class PictureComponent {
  @Input({ required: true }) picture!: Picture;
 
}

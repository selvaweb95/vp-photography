import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
  Gallery,
} from 'ng-gallery';

@Component({
  selector: 'app-signature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.scss'
})
export class SignatureComponent implements OnInit {
  items: GalleryItem[] = [];

  @Input() image:any
  @Input() CoverImage:any 
  @Input() coustomerName:any 
  @Input() eventDate:any 

  imageData:any;
  landingImg:boolean=true;
  constructor(public gallery: Gallery) {
    setTimeout(() => {
      this.landingImg=false
    }, 3000);
  }
  ngOnInit(): void {
    this.items = this.image?.photos.map(
      (item: { file: any; }) => new ImageItem({ src: item.file, thumb: item.file })
    );
    this.imageData=this.image?.photos

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    
    lightboxRef.load(this.items);
  }
}

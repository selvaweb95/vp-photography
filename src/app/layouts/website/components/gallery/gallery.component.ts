import { Component, Input } from '@angular/core';
import {
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
  Gallery,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items: GalleryItem[] = [];
  @Input() favorite!:boolean;
  imageData = data;
  selected :any;
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    // this.favorite=
    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

  select(item:any) {
    this.selected = item; 
};
isActive(item:any) {
    return this.selected === item;
};
}


const data = [
  {
    srcUrl: '../../../assets/images/gallery1.jpg',
    previewUrl: '../../../assets/images/gallery1.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery2.jpg',
    previewUrl: '../../../assets/images/gallery2.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery3.jpg',
    previewUrl: '../../../assets/images/gallery3.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery4.jpg',
    previewUrl: '../../../assets/images/gallery4.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery5.jpg',
    previewUrl: '../../../assets/images/gallery5.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery6.jpg',
    previewUrl: '../../../assets/images/gallery6.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery7.jpg',
    previewUrl: '../../../assets/images/gallery7.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery8.jpg',
    previewUrl: '../../../assets/images/gallery8.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery9.jpg',
    previewUrl: '../../../assets/images/gallery9.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery10.jpg',
    previewUrl: '../../../assets/images/gallery10.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery11.jpg',
    previewUrl: '../../../assets/images/gallery11.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery12.jpg',
    previewUrl: '../../../assets/images/gallery12.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery13.jpg',
    previewUrl: '../../../assets/images/gallery13.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery14.jpg',
    previewUrl: '../../../assets/images/gallery14.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery15.jpg',
    previewUrl: '../../../assets/images/gallery15.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery16.jpg',
    previewUrl: '../../../assets/images/gallery16.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery17.jpg',
    previewUrl: '../../../assets/images/gallery17.jpg',
  },
  {
    srcUrl: '../../../assets/images/gallery18.jpg',
    previewUrl: '../../../assets/images/gallery18.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  },
];

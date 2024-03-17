
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
  Gallery,
} from 'ng-gallery';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.scss'
})
export class SignatureComponent {
  items: GalleryItem[] = [];

  image=[]
  CoverImage=""
  coustomerName="" 
 eventDate=""

  imageData:any;
  landingImg:boolean=true;
  constructor(public gallery: Gallery,private router: Router) { 
    console.log(router.getCurrentNavigation()?.extras.state);
    this.coustomerName = router.getCurrentNavigation()?.extras.state?.['coustomerName'];
      this.eventDate = router.getCurrentNavigation()?.extras.state?.['eventDate'].split("T")[0]; 
      this.CoverImage = router.getCurrentNavigation()?.extras.state?.['CoverImage'];
      this.image = router.getCurrentNavigation()?.extras.state?.['image'];
    setTimeout(() => {
      this.landingImg=false
    }, 3000);
    this.items = this.image.map(
      (item: { file: any; }) => new ImageItem({ src: item.file, thumb: item.file })
    );
    this.imageData=this.image

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    
    lightboxRef.load(this.items);
  }

}

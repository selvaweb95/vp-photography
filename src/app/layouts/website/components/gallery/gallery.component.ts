import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
  Gallery,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { SharedService } from 'src/app/services/shared/shared.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items: GalleryItem[] = [];
  @Input() favorite!:boolean;
  @Input() eventList:any
  @Input() FavouriteList:any 
  @Input() albumLimit:any 
  @Output() selectedImg = new EventEmitter<any>();

  imageData:any;
  selectedImage :Array<any>=[];
  selectedFav :Array<any>=[];
  constructor(public gallery: Gallery, public lightbox: Lightbox,private service:SharedService) {}

  ngOnInit() {
    /** Basic Gallery Example */
   
    // Creat gallery items
    console.log(this.eventList);
    
    this.items = this.eventList?.photos.map(
      (item: { file: any; }) => new ImageItem({ src: item.file, thumb: item.file })
    );
    this.imageData=this.eventList?.photos
    // this.selectedFav =(this.FavouriteList);
    for (let index = 0; index < this.FavouriteList.length; index++) {
      this.selectedFav.push(this.FavouriteList[index].id)
      
    }
    // console.log(this.isActiveFav(this.FavouriteList[0]));
    
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
    console.log(this.items[0]);
    
    lightboxRef.load(this.items);
  }

  selectImage(item:any) {
    if (this.selectedImage.length > this.albumLimit) {
      return false
    }
    if (this.selectedImage.includes(item)) {
      this.selectedImage.splice(this.selectedImage.findIndex(r=>r == item),1)
    } else {
      this.selectedImage.push(item); 
    }
    this.selectedImg.emit(this.selectedImage)
};
 selectFav(item:any) {
  if (this.selectedFav.includes(item.id)) {
    this.selectedFav.splice(this.selectedFav.findIndex(r=> r == item.id),1)
    this.service.removeFav(item).subscribe((data:any)=>{console.log(data)})
  } else {
    this.selectedFav.push(item.id); 
    this.service.addToFav(item).subscribe((data:any)=>{console.log(data)})
  }
};
isActiveImage(item:any) {
    return this.selectedImage.includes(item) ;
};
isActiveFav(item:any) {
    return this.selectedFav.includes(item.id) ;
};
}

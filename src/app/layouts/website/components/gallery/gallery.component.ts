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
  @Output() isNewlySelected = new EventEmitter<any>();

  imageData:any;
  selectedImage :Array<any>=[];
  selectedFav :Array<any>=[];
  newlyelectedcount:number=0;
  constructor(public gallery: Gallery, public lightbox: Lightbox,private service:SharedService) {}

  ngOnInit() {

    this.items = this.eventList?.photos.map(
      (item: { file: any; }) => new ImageItem({ src: item.file, thumb: item.file })
    );
    this.imageData=this.eventList?.photos
    // this.selectedFav =(this.FavouriteList);
    for (let index = 0; index < this.FavouriteList.length; index++) {
      this.selectedFav.push(this.FavouriteList[index].id)
      
    }

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }

  selectImage(item:any) {
    if (this.albumLimit != 0) {
      if (this.selectedImage.length > this.albumLimit) {
        return false
      }
    }
    if (this.selectedImage.includes(item)) {
      this.newlyelectedcount=this.newlyelectedcount - 1
      this.selectedImage.splice(this.selectedImage.findIndex(r=>r == item),1)
    } else {
      this.newlyelectedcount=this.newlyelectedcount + 1
      this.selectedImage.push(item); 
    }
    this.selectedImg.emit(this.selectedImage)
    this.isNewlySelected.emit(this.newlyelectedcount)
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

import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  value = 'Clear me';
  @ViewChild('Home',{static:true}) Home!:ElementRef;
  @ViewChild('aboutus',{static:true}) aboutus!:ElementRef;
  @ViewChild('products',{static:true}) products!:ElementRef;
  @ViewChild('ContactUs',{static:true}) ContactUs!:ElementRef;
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:1000,
    arrows: false,
 };
 navLink:string=''
  constructor(private router: Router,private navser:NavbarService,@Inject(DOCUMENT) private document: any) {
  
    this.navser.navId.subscribe((data)=>{
    this.navLink=data;
    this.navigationScroll();
    })
    // AOS.init(); 
    // this.navLink = this.router.getCurrentNavigation()?.extras?.state?.['scrollto'];
    // console.log(this.navLink);
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {return false};

    // if(navLink == 'aboutus'){
    //   this.aboutus.nativeElement.scrollIntoView({behavior:'smooth'})
    // }
    // if(navLink == 'Products'){
    //   this.products.nativeElement.scrollIntoView({behavior:'smooth'})
    // }
    // if(this.router.getCurrentNavigation()?.extras?.state?.['scrollto']){

    // }
  }
  ngAfterViewInit(): void {
    
    
    
  }
  navigationScroll(){
    if(this.navLink == 'aboutus'){
      setTimeout(()=>{
        // this.aboutus.nativeElement.scrollIntoView({behavior:'smooth'});
        window.scrollTo({ top: this.aboutus.nativeElement.offsetTop-100,behavior:'smooth' })
      },200)
    }
    if(this.navLink == 'Products'){
      setTimeout(()=>{
        // console.log(this.products.nativeElement.offsetTop);

        window.scrollTo({ top: this.products.nativeElement.offsetTop-100,behavior:'smooth' })

        // window.scrollTo()
        
      // this.products.nativeElement
    },200)
    }
    if(this.navLink == 'ContactUs'){
      setTimeout(()=>{
        // console.log(this.products.nativeElement.offsetTop);

        window.scrollTo({ top: this.ContactUs.nativeElement.offsetTop-100,behavior:'smooth' })

        // window.scrollTo()
        
      // this.products.nativeElement
    },200)
    }
    if(this.navLink == 'Home'){
      setTimeout(()=>{
        // console.log(this.products.nativeElement.offsetTop);

        window.scrollTo({ top: this.Home.nativeElement.offsetTop-100,behavior:'smooth' })

        // window.scrollTo()
        
      // this.products.nativeElement
    },200)
    }
    
  }
  goDown3(name:any) {
    this.router.navigate([], { fragment: name });
  }
  ngOnInit(): void {
    Aos.init({
      once: true,
      duration: 1200,
      });
    Aos.refresh();

   
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(e:any){
    const windowScroll:number = window.pageYOffset;
    // console.log('windowScroll',windowScroll);
    let winHeight=window.innerHeight
    // if(){
    //   // alert();
    // } else {
      
    // }
    // if(windowScroll >= this.elementPosition){
    //   // alert()
    //   this.sticky = true;
    // } else {
    //   this.sticky = false;
    // }
  }

  
}

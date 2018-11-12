import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  save_the_date = '31st January 2019';
  groom_name = 'Rohit';
  bride_name = 'Anshika';
  weds = 'Weds';

  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
public slideArr = [
  {image: 'https://mdbootstrap.com/img/Photos/Others/images/77.jpg'},
  {image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
  {image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'}
];
  activeSlideChange(event: any) {
      console.log(event);
  }
  ngOnInit() {
    console.log(this.slideArr);
  }

}

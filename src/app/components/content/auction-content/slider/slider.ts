import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  images = [
    'images/car1.jpg',
    'images/car2.jpg',
    'images/car3.jpg'
  ];


  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  share() {
    alert('مشاركة الصورة');
  }

  like() {
    alert('تمت الإضافة للمفضلة');
  }

  zoom() {
    alert('تكبير الصورة');
  }
}
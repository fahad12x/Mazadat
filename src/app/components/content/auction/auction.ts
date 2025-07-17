import { Component } from '@angular/core';
import { Slider } from '../auction-content/slider/slider';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for dynamic content

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [Slider, RouterOutlet], // Include Slider and RouterOutl
  templateUrl: './auction.html',
  styleUrl: './auction.css'
})
export class Auction {

}

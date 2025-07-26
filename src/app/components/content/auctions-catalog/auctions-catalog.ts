import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-auctions-catalog',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './auctions-catalog.html',
  styleUrl: './auctions-catalog.css'
})
export class AuctionsCatalog {
  products = [
    {
      name: 'BMW 2024',
      type: 'رياضية',
      image: 'https://images.unsplash.com/photo-1571607388063-83bdb3bfa5f1',
      logo: 'https://images.seeklogo.com/logo-png/23/2/bmw-logo-png_seeklogo-239558.png',
      price: 120000
    },
    {
      name: 'Ford Mustang',
      type: 'كلاسيكية',
      image: 'https://images.unsplash.com/photo-1519581663276-87df97f7fabb',
      logo: 'https://images.seeklogo.com/logo-png/5/2/ford-logo-png_seeklogo-56575.png',
      price: 95000
    },
    {
      name: 'Audi A8',
      type: 'فخمة',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
      logo: 'https://images.seeklogo.com/logo-png/1/2/audi-logo-png_seeklogo-13444.png',
      price: 180000
    }
  ];
}

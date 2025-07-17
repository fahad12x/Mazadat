import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNav} from './components/top-nav/top-nav';
import { Sidebar } from './components/sidebar/sidebar';
import { BottomNav } from './components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNav, Sidebar, BottomNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Mazadat';
}

import { Component } from '@angular/core';
import { LoremIpsum, loremIpsum } from 'lorem-ipsum';
import { MenuComponent } from '../menu/menu.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, TopbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected lorem = new LoremIpsum();
  protected word = loremIpsum({
    count: 1,
    units: 'word',
  });
}

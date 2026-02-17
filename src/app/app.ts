import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar/navbar';
import { Splash } from './shared/splash/splash';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Splash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-leonardo');
}

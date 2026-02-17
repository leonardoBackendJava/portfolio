import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuAbierto = false;

  constructor(private elRef: ElementRef) { }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.menuAbierto) {
      this.menuAbierto = false;
    }
  }

}

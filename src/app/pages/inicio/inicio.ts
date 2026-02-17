import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
})
export class Inicio implements AfterViewInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;

  ngAfterViewInit(): void {
    this.initParticles();
  }

  initParticles() {
    const hero = this.heroSection.nativeElement as HTMLElement;
    const particlesContainer = hero.querySelector('.particles') as HTMLElement;

    const numParticles = 50;
    const particles: { el: HTMLElement; x: number; y: number; speedX: number; speedY: number }[] = [];

    const heroWidth = hero.getBoundingClientRect().width;
    const heroHeight = hero.getBoundingClientRect().height;

    for (let i = 0; i < numParticles; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.innerText = Math.random() > 0.5 ? '0' : '1';

      const x = Math.random() * heroWidth;
      const y = Math.random() * heroHeight;
      const speedX = (Math.random() - 0.5) * 0.3;
      const speedY = (Math.random() - 0.5) * 0.3;

      p.style.transform = `translate(${x}px, ${y}px)`;
      particlesContainer.appendChild(p);

      particles.push({ el: p, x, y, speedX, speedY });
    }

    const animateParticles = () => {
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > heroWidth) p.speedX *= -1;
        if (p.y < 0 || p.y > heroHeight) p.speedY *= -1;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      particles.forEach(p => {
        p.el.style.transform = `translate(${p.x}px, ${p.y + scrollY * 0.2}px)`;
      });
    });
  }
}

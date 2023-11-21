import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngAfterViewInit() {

    const backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBacktotop);
      document.addEventListener('scroll', toggleBacktotop);
    }

    const typedElement = document.querySelector('.typed') as HTMLElement;
    if (typedElement) {
      const typedItems = typedElement.getAttribute('data-typed-items');
      if (typedItems) {
        const items = typedItems.split(',');
        new Typed('.typed', {
          strings: items,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 1500
        });
      }
    }
  };

  constructor() {

    const navbarlinksActive = (): void => {
      const position = window.scrollY + 200;
      const navbarlinks = Array.from(document.querySelectorAll('#navbar .scrollto')) as HTMLElement[];
      navbarlinks.forEach((navbarlink: HTMLElement) => {
        if (!navbarlink || !navbarlink.getAttribute('href')) return;
        const section = document.querySelector(navbarlink.getAttribute('href')!) as HTMLElement;
        if (!section) return;
        if (
          position >= (section.offsetTop as number) &&
          position <= (section.offsetTop as number) + (section.offsetHeight as number)
        ) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navbarlinksActive);
    window.onscroll = navbarlinksActive;

  }

}


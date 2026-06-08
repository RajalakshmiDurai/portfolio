import { Component } from '@angular/core';
declare var Typed: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit(): void {
    var typing = new Typed('.full-stack', {
      strings: [
        '',
        'AI and Data Science Enthusiast!',
        'Aspiring Machine Learning Engineer!',
        'Data Analytics Learner!'
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }
}

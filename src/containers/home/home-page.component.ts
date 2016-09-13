import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'qt-home-page',
  template: require('./home-page.component.html'),
})
export class QtHomePageComponent {
  constructor(private title: Title) {
    title.setTitle('Quotter - Welcome!');
  }
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { QtHomeBannerComponent } from './banner';
import { QtHeaderComponent } from '../header';

@Component({
  selector: 'qt-home-page',
  template: require('./home-page.component.html'),
  directives: [QtHomeBannerComponent, QtHeaderComponent],
})
export class QtHomePageComponent {
  constructor(private title: Title) {
    title.setTitle('Quotter - Welcome!');
  }
}

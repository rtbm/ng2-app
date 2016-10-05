import { getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { QtAppComponentsModule } from '../app.components.module';

let fixture;
let de;

describe('Box Component', () => {
  beforeEach(done => {
    const testBed = getTestBed();

    testBed.configureTestingModule({
      imports: [
        QtAppComponentsModule,
      ],
      declarations: [
        QtBoxTestComponent,
      ],
    });

    testBed.compileComponents().then(() => {
      fixture = testBed.createComponent(QtBoxTestComponent);
      fixture.detectChanges();
      done();
    });
  });

  it('should display original title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toBe('foo');
  });
});

@Component({
  selector: 'test',
  template: `
    <x-box>
      <h1>foo</h1>
    </x-box>
  `,
})
class QtBoxTestComponent {}

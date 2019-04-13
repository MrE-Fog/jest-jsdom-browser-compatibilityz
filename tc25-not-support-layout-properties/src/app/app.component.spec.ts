import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { expect } from 'chai';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.nativeElement.querySelector('#test');
    // expect(el.clientWidth).to.equal(400);
    // expect(el.offsetWidth).to.equal(400);
    expect(el.getBoundingClientRect().width).to.equal(400);
  });
});

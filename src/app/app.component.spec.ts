import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
        MatTableModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Multiplication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Multiplication');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Multiplication!');
  });

  it(`Multiplication calcRussian `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.numberOne = 2;
    app.numberTwo = 2;
    app.calcRussian();
    expect(app.sumTotalRussian).toEqual(4);
  });

  it(`Multiplication calcEgyptian `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.numberOne = 2;
    app.numberTwo = 2;
    app.calcEgyptian();
    expect(app.sumTotalEgyptian).toEqual(4);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiComponente } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<MiComponente>;
  let app: MiComponente;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponente],
    });

    fixture = TestBed.createComponent(MiComponente);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mi-aplicacion-angular!'); // Reemplaza con el título de tu aplicación
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoXComponent } from './contenido-x.component';

describe('ContenidoXComponent', () => {
  let component: ContenidoXComponent;
  let fixture: ComponentFixture<ContenidoXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

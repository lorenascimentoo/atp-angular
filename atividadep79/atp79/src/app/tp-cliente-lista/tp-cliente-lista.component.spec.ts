import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpClienteListaComponent } from './tp-cliente-lista.component';

describe('TpClienteListaComponent', () => {
  let component: TpClienteListaComponent;
  let fixture: ComponentFixture<TpClienteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpClienteListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpClienteCadastroComponent } from './tp-cliente-cadastro.component';

describe('TpClienteCadastroComponent', () => {
  let component: TpClienteCadastroComponent;
  let fixture: ComponentFixture<TpClienteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpClienteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpClienteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReceitasDespesas } from './lista-receitas-despesas';

describe('ListaReceitasDespesas', () => {
  let component: ListaReceitasDespesas;
  let fixture: ComponentFixture<ListaReceitasDespesas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaReceitasDespesas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaReceitasDespesas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

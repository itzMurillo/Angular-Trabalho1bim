import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReceita } from './cadastro-receita';

describe('CadastroReceita', () => {
  let component: CadastroReceita;
  let fixture: ComponentFixture<CadastroReceita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroReceita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReceita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

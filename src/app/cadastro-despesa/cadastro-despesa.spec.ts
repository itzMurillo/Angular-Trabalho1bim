import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDespesa } from './cadastro-despesa';

describe('CadastroDespesa', () => {
  let component: CadastroDespesa;
  let fixture: ComponentFixture<CadastroDespesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDespesa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDespesa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { CadastroDespesa } from './cadastro-despesa/cadastro-despesa';
import { CadastroReceita } from './cadastro-receita/cadastro-receita';
import { ListaReceitasDespesas } from './lista-receitas-despesas/lista-receitas-despesas';
import { Relatorios } from './relatorios/relatorios';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'cadastro-despesas', component: CadastroDespesa },
  { path: 'cadastro-receita', component: CadastroReceita },
  { path: 'lista-receitas-despesas', component: ListaReceitasDespesas },
  { path: 'relatorios', component: Relatorios },
];

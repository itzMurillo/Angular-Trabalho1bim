import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-receitas-despesas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-receitas-despesas.html',
  styleUrls: ['./lista-receitas-despesas.css'],
})
export class ListaReceitasDespesas {
  //criando listas de receitas e despesas e campo de texto para filtro
  receitas: any[] = [];
  despesas: any[] = [];
  filtro = '';

  //variáveis para edição mínima
  editandoId: number | null = null; //id que está sendo ediitado
  editandoTipo: 'receita' | 'despesa' | null = null; //tipo do item
  editandoDescricao = '';
  editandoValor = 0;
  editandoCategoria = '';

  constructor() {
    //carrega os dados salvos no navegador
    const receita = localStorage.getItem('receitas');
    const despesa = localStorage.getItem('despesas');
    if (receita) this.receitas = JSON.parse(receita);
    if (despesa) this.despesas = JSON.parse(despesa);
  }

  //mostra só as receitas e despesas do filtro
  get receitasFiltradas() {
    return this.receitas.filter((receita) =>
      receita.descricao.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
  get despesasFiltradas() {
    return this.despesas.filter((despesa) =>
      despesa.descricao.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  //remove uma receita ou despesa
  excluirReceita(id: number) {
    this.receitas = this.receitas.filter((receita) => receita.id !== id);
    localStorage.setItem('receitas', JSON.stringify(this.receitas));
  }
  excluirDespesa(id: number) {
    this.despesas = this.despesas.filter((despesa) => despesa.id !== id);
    localStorage.setItem('despesas', JSON.stringify(this.despesas));
  }

  //inicia edição de recceita ou despesa
  editarReceita(id: number) {
    const r = this.receitas.find((r) => r.id === id);
    if (r) {
      this.editandoId = id;
      this.editandoTipo = 'receita';
      this.editandoDescricao = r.descricao;
      this.editandoValor = r.valor;
      this.editandoCategoria = r.categoria;
    }
  }
  editarDespesa(id: number) {
    const d = this.despesas.find((d) => d.id === id);
    if (d) {
      this.editandoId = id;
      this.editandoTipo = 'despesa';
      this.editandoDescricao = d.descricao;
      this.editandoValor = d.valor;
      this.editandoCategoria = d.categoria;
    }
  }

  //salva a edição
  salvarEdicao() {
    if (this.editandoTipo === 'receita' && this.editandoId != null) {
      const r = this.receitas.find((r) => r.id === this.editandoId);
      if (r) {
        r.descricao = this.editandoDescricao;
        r.valor = this.editandoValor;
        r.categoria = this.editandoCategoria;
        localStorage.setItem('receitas', JSON.stringify(this.receitas));
      }
    } else if (this.editandoTipo === 'despesa' && this.editandoId != null) {
      const d = this.despesas.find((d) => d.id === this.editandoId);
      if (d) {
        d.descricao = this.editandoDescricao;
        d.valor = this.editandoValor;
        d.categoria = this.editandoCategoria;
        localStorage.setItem('despesas', JSON.stringify(this.despesas));
      }
    }
    this.cancelarEdicao();
  }
  //cancela edicão
  cancelarEdicao() {
    this.editandoId = null;
    this.editandoTipo = null;
    this.editandoDescricao = '';
    this.editandoValor = 0;
    this.editandoCategoria = '';
  }
}

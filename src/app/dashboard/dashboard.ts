import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  //array pra guardar as receitas carregadas do localStorage
  receitas: {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
  }[] = [];

  //array pra guardar as despesas carregadas do localStorage
  despesas: {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
  }[] = [];

  //propriedades para guardar totais e saldo final
  receitaTotal: number = 0;
  despesaTotal: number = 0;
  saldoFinal: number = 0;

  //hook que roda automaticamente quando o componente é inicializado na tela
  ngOnInit() {
    this.carregarDados();
    this.calcularTotais();
  }

  //metodo para puxar receitas e despesas do localStorage
  carregarDados() {
    const receitasStorage = localStorage.getItem('receitas');
    const despesasStorage = localStorage.getItem('despesas');

    //se tiver receitas e despesas no localStorage, converte de JSON pra array
    if (receitasStorage) {
      this.receitas = JSON.parse(receitasStorage);
    }
    if (despesasStorage) {
      this.despesas = JSON.parse(despesasStorage);
    }
  }

  //metodo pra calcular receitas, despesas e saldo final
  calcularTotais() {
    this.receitaTotal = this.receitas.reduce((total, r) => total + r.valor, 0);
    this.despesaTotal = this.despesas.reduce((total, d) => total + d.valor, 0);
    this.saldoFinal = this.receitaTotal - this.despesaTotal;
  }

  //metodo pra formatar valores em moeda brasileira (R$)
  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  //metodo que mostra a classe css de acordo se o saldo é positivo ou negativo
  getClasseSaldo(): string {
    return this.saldoFinal >= 0 ? 'saldo-positivo' : 'saldo-negativo';
  }

  //metodo que mostra as 3 ultimas transações
  getUltimasTransacoes() {
    return {
      receitas: this.receitas.slice(-3),
      despesas: this.despesas.slice(-3),
    };
  }
}

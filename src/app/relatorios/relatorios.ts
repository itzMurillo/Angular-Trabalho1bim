import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorios.html',
  styleUrls: ['./relatorios.css'],
})
export class Relatorios {
  despesas: any[] = [];
  saldo = 0;
  receitaTotal = 0;
  despesaTotal = 0;

  constructor() {
    //pega receitas e despesas salvas no navegador
    const receita = localStorage.getItem('receitas');
    const despesa = localStorage.getItem('despesas');
    //muda de texto para lista, ou cria lista vazia se não tem nada
    const receitas = receita ? JSON.parse(receita) : [];
    this.despesas = despesa ? JSON.parse(despesa) : [];

    this.receitaTotal = receitas.reduce((t: number, x: any) => t + x.valor, 0); //soma todos os valores das receitas
    this.despesaTotal = this.despesas.reduce(
      (t: number, x: any) => t + x.valor,
      0
    ); //soma todos os valores das despesas
    this.saldo = this.receitaTotal - this.despesaTotal; //calcula quanto sobrou
  }

  //calcula a porcentagem do dinheiro que foi gasta em cada categoria
  getPercentualCategoria(cat: string) {
    const total = this.despesaTotal || 1; //se não tem despesas, evita dividir por zero
    //soma só as despesas dessa categoria específica
    const soma = this.despesas
      .filter((d) => d.categoria === cat)
      .reduce((t, d) => t + d.valor, 0);
    return ((soma / total) * 100).toFixed(1); //trnasforma em porcentagem e arredonda para 1 casa decimal
  }

  //calcula quanto é gasto em média por despesa
  getMediaDespesas() {
    if (this.despesas.length === 0) return 0;
    return (this.despesaTotal / this.despesas.length).toFixed(2);
  }
}

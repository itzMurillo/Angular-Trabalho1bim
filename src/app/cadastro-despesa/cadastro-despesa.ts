import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-despesa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-despesa.html',
  styleUrls: ['./cadastro-despesa.css'],
})
export class CadastroDespesa {
  descricao = '';
  valor: number | null = null;
  categoria = 'alimentação';
  despesas: any[] = [];

  //se descrição estiver vazia, valor não informado e valor menor/igual a zero, a função para
  salvar() {
    if (!this.descricao || !this.valor || this.valor <= 0) return;

    //carrega do localStorage antes de salvar
    const despesasStorage = localStorage.getItem('despesas');
    this.despesas = despesasStorage ? JSON.parse(despesasStorage) : [];

    //criando um objeto de despesa
    const despesa = {
      id: Date.now(),
      descricao: this.descricao,
      valor: this.valor,
      categoria: this.categoria,
    };

    this.despesas.push(despesa); //adiciona a despesa ao array de despesas
    localStorage.setItem('despesas', JSON.stringify(this.despesas)); //salva o array de despesas no localStorage

    //limpa tudo
    this.descricao = '';
    this.valor = null;
    this.categoria = 'alimentação';
  }
}

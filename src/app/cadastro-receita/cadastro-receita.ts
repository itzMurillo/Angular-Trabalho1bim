import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-receita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-receita.html',
  styleUrls: ['./cadastro-receita.css'],
})
export class CadastroReceita {
  descricao = '';
  valor: number | null = null;
  categoria = 'salário';
  receitas: any[] = [];

  //se descrição estiver vazia, valor não informado e valor menor/igual a zero, a função para
  salvar() {
    if (!this.descricao || !this.valor || this.valor <= 0) return;

    //carrega do localStorage antes de salvar
    const receitasStorage = localStorage.getItem('receitas');
    this.receitas = receitasStorage ? JSON.parse(receitasStorage) : [];

    //criando um objeto de receita
    const receita = {
      id: Date.now(),
      descricao: this.descricao,
      valor: this.valor,
      categoria: this.categoria,
    };

    this.receitas.push(receita); //adiciona a receita ao array de receitas
    localStorage.setItem('receitas', JSON.stringify(this.receitas)); //salva o array de receitas no localStorage

    //limpa tudo depois de salvar
    this.descricao = '';
    this.valor = null;
    this.categoria = 'salário';
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {pipe} from "rxjs";
import {scan, startWith, tap, filter, map} from "rxjs/operators";
import {DadosService} from "../dados.service";

@Component({
  selector: 'app-insere',
  templateUrl: './insere.component.html',
  styleUrls: ['./insere.component.css']
})
export class InsereComponent implements OnInit {
  public nome = new FormControl('');
  public dados: Array<string> = ['Exemplo'];

  constructor() { }

  ngOnInit(): void {
  }

  public adiciona() {
    console.log('Acho que precisa fazer algo...');
    this.dados.push(this.nome.value);
    this.nome.setValue('');
  }

}

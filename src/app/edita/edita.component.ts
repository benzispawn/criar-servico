import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DadosService} from "../dados.service";
import {Observable, pipe, of, scan, tap} from "rxjs";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent {
  public formGroup: FormGroup;
  public elemForm: any;
  public dados: Array<string> = ['nome']

  constructor() {
    let obj = {};
    for (let e of this.dados) {
      console.log(e)
      Object.assign(obj, {[e]: new FormControl(e)});
    }
    this.formGroup = new FormGroup(obj);
    this.elemForm = of(Object.values(this.formGroup.controls));
    for (let el of this.dados) {
      const elemento = this.formGroup.get(el);
      if (elemento) {

        elemento.valueChanges
          .pipe(
            startWith({prev: null, curr: elemento?.value}),
            scan((prev: any, curr) => ({prev: prev.curr, curr: curr})),
          )
          .subscribe(val => {
            console.log(`val`, val)
          })
      }
    }
  }


}

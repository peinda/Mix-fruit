import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.page.html',
  styleUrls: ['./create-compte.page.scss'],
})
export class CreateComptePage implements OnInit {
  creatComptForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creatComptForm= this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['', [Validators.required, Validators.pattern('7[7|6|8|0|5][0-9]{7}$')]],
      adresse: ['', [Validators.required, Validators.minLength(3)]],
      }
    );
  }

  get errorControl(){ return this.creatComptForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.creatComptForm.invalid){
      return null;
    }
  }
}

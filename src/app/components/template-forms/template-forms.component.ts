import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})

export class TemplateFormsComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repetirPass: ""
  };

  constructor(){
   
  }

  submit(){
      
  }
}

interface IRegisterForm{
  name: String;
  email: string,
  password: String;
  repetirPass: String;
}

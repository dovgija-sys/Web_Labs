import { Component} from '@angular/core';
import { Header } from './header/header';
import { FieldForm } from './field-form/field-form';
import { PotatoFieldForm } from './potato-field-form/potato-field-form';

@Component({
  imports: [Header,FieldForm, PotatoFieldForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}

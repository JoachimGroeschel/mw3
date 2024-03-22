import { Component } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',

})
export class HelloComponent {
  title = 'Hello World!';
  name: string = 'Veränderbarer Text';

  printName() {
    console.log(this.name);
  }
}

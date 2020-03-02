import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hello-button',
  templateUrl: './hello-button.component.html',
  styleUrls: ['./hello-button.component.css']
})
export class HelloButtonComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  hello() {
    this._snackBar.open("Hello! I am a button!", "Hi button!", {
      duration: 5000,
    });
  }

}

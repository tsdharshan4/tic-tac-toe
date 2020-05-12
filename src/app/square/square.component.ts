import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() value: string;
  @Output('playerClick') click = new EventEmitter<string>();
  @HostListener('click') clickhandler() {
    this.click.emit('');
  }
}

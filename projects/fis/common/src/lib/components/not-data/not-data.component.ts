import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fis-not-data',
  templateUrl: './not-data.component.html',
  styleUrls: ['./not-data.component.scss']
})
export class NotDataComponent implements OnInit {

  @Input() icon = 'info_outline';
  @Input() message = 'nenhum dado a ser exibido';

  constructor() { }

  ngOnInit() {
  }

}

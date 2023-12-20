import { Component, Input, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-commonfilter',
  templateUrl: './commonfilter.component.html',
  styleUrls: ['./commonfilter.component.scss']
})
export class CommonfilterComponent implements OnInit {

  @Input() placeholder: string
  @Input() field: string
  @Input() menu: string
  @Input() type: string

  matchModeOptionsString: SelectItem[]
  matchModeOptionsNumeric: SelectItem[]

  constructor() { }

  ngOnInit(): void {
    this.matchModeOptionsString = [
      { label: 'Contiene', value: FilterMatchMode.CONTAINS },
      //{ label: 'Igual', value: FilterMatchMode.EQUALS },
      //{ label: 'Empieza con', value: FilterMatchMode.STARTS_WITH }
    ];

    this.matchModeOptionsNumeric = [
      { label: 'Igual', value: FilterMatchMode.EQUALS },
      { label: 'Mayor igual', value: FilterMatchMode.GREATER_THAN_OR_EQUAL_TO },
      { label: 'Menor igual', value: FilterMatchMode.LESS_THAN_OR_EQUAL_TO }
    ]
  }
}
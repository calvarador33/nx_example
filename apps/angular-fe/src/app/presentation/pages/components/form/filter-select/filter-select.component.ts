import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneralFiltersService } from 'apps/angular-fe/src/app/features/service/general-filters.service';


@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {

  @Input() label: string
  @Input() accion: string  
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  selectedValue: any
  options: any  

  constructor(private generalFiltersService: GeneralFiltersService) { }

  ngOnInit() {
    this.generalFiltersService.getData(this.accion).subscribe(res => {
      this.options = res
      this.selectedValue =  this.options[0]
      this.onChange.emit(this.selectedValue)
    })
    }

    onChangeValue() {           
      this.onChange.emit(this.selectedValue)
    }

}

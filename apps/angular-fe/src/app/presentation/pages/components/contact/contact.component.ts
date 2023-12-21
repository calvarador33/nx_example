import { Component, Input, OnInit } from '@angular/core';
import { EstablishmentService } from 'apps/angular-fe/src/app/features/service/establishment.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: any
  autoridadSanitaria: string = '';
  establecimiento: string = '';
  direccion: string = '';
  ubigeo: string = '';
  telefono: string = '';
  contactos: any[] = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    const code = this.contact.alm_codigo ?? this.contact.swc_dash_ialm_codigo
    this.establishmentService.getItemById(code).subscribe(res => {      
      this.autoridadSanitaria = this.contact.AutoridadSanitaria
      this.establecimiento = res.establecimiento.almdes
      this.direccion = res.establecimiento.almdireccion
      this.ubigeo = `${res.establecimiento.Dpto} - ${res.establecimiento.Prov} - ${res.establecimiento.Dist}`
      this.telefono = res.establecimiento.almtelefono
      this.contactos = res.contacto
    })
  }
}

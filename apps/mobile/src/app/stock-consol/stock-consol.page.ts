import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, mapOutline, peopleOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-consol',
  templateUrl: './stock-consol.page.html',
  styleUrls: ['./stock-consol.page.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, FormsModule,]
})
export class StockConsolPage implements OnInit {

  data: any =
    [
      {
        "swc_dash_vDiresa": 'DIRESA-CALLAO',
        swc_dash_ialm_codigo: 7977,
        swc_dash_valmcod: '07126',
        swc_dash_vEstablecimiento: 'HOSP DE VENTANILLA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CALLAO',
        swc_dash_ialm_codigo: 3255,
        swc_dash_valmcod: '06219',
        swc_dash_vEstablecimiento: 'HOSP SAN JOSE',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CALLAO',
        swc_dash_ialm_codigo: 3254,
        swc_dash_valmcod: '06218',
        swc_dash_vEstablecimiento: 'HOSPITAL NACIONAL DANIEL ALCIDES CARRION - CALLAO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CALLAO',
        swc_dash_ialm_codigo: 9233,
        swc_dash_valmcod: '17883',
        swc_dash_vEstablecimiento: 'UNIDAD EJECUTORA HOSPITAL DE REHABILITACIÓN DEL CALLAO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-E'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CUSCO',
        swc_dash_ialm_codigo: 1239,
        swc_dash_valmcod: '02305',
        swc_dash_vEstablecimiento: 'HOSP APOYO A.LORENA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CUSCO',
        swc_dash_ialm_codigo: 7986,
        swc_dash_valmcod: '07135',
        swc_dash_vEstablecimiento: 'HOSP ESPINAR',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CUSCO',
        swc_dash_ialm_codigo: 1307,
        swc_dash_valmcod: '02421',
        swc_dash_vEstablecimiento: 'HOSP QUILLABAMBA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CUSCO',
        swc_dash_ialm_codigo: 4737,
        swc_dash_valmcod: '02289',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL CUSCO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-CUSCO',
        swc_dash_ialm_codigo: 4772,
        swc_dash_valmcod: '02378',
        swc_dash_vEstablecimiento: 'HOSP SICUANI',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-HUANCAVELICA',
        swc_dash_ialm_codigo: 92175,
        swc_dash_valmcod: '18258',
        swc_dash_vEstablecimiento: 'C.S. SISTEMA DE ATENCION MOVIL DE URGENCIA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'SIN CATEGORIA'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-HUANCAVELICA',
        swc_dash_ialm_codigo: 2032,
        swc_dash_valmcod: '03853',
        swc_dash_vEstablecimiento: 'HOSP DPTAL. DE HUANCAVELICA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-HUANCAVELICA',
        swc_dash_ialm_codigo: 5469,
        swc_dash_valmcod: '04074',
        swc_dash_vEstablecimiento: 'HOSPITAL DE PAMPAS DE TAYACAJA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-HUANUCO',
        swc_dash_ialm_codigo: 446,
        swc_dash_valmcod: '00932',
        swc_dash_vEstablecimiento: 'HOSP DE TINGO MARIA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-HUANUCO',
        swc_dash_ialm_codigo: 3851,
        swc_dash_valmcod: '00754',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL HERMILIO VALDIZAN',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-ICA',
        swc_dash_ialm_codigo: 5297,
        swc_dash_valmcod: '03358',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL DE ICA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-ICA',
        swc_dash_ialm_codigo: 5298,
        swc_dash_valmcod: '03359',
        swc_dash_vEstablecimiento: 'HOSPITAL SANTA MARIA DEL SOCORRO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-JUNIN',
        swc_dash_ialm_codigo: 3850,
        swc_dash_valmcod: '00753',
        swc_dash_vEstablecimiento: 'HOSPITAL REGIONAL DOCENTE CLINICO QUIRURGICO DANIEL ALCIDES CARRION DE HUANCAYO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-E'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-JUNIN',
        swc_dash_ialm_codigo: 7724,
        swc_dash_valmcod: '06615',
        swc_dash_vEstablecimiento: 'REGIONAL DOCENTE MATERNO INFANTIL EL CARMEN',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-E'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-LIMA',
        swc_dash_ialm_codigo: 7112,
        swc_dash_valmcod: '07638',
        swc_dash_vEstablecimiento: 'HOSP CHANCAY Y SERVICIOS BASICO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-LIMA',
        swc_dash_ialm_codigo: 3137,
        swc_dash_valmcod: '05986',
        swc_dash_vEstablecimiento: 'HOSP REZOLA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-LORETO',
        swc_dash_ialm_codigo: 105,
        swc_dash_valmcod: '00210',
        swc_dash_vEstablecimiento: 'HOSP SANTA GEMA DE YURIMAGUAS',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-LORETO',
        swc_dash_ialm_codigo: 3445,
        swc_dash_valmcod: '00001',
        swc_dash_vEstablecimiento: 'HOSPITAL IQUITOS CESAR GARAYAR GARCIA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-LORETO',
        swc_dash_ialm_codigo: 3447,
        swc_dash_valmcod: '00003',
        swc_dash_vEstablecimiento: 'HOSPITAL REGIONAL DE LORETO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-MADRE DE DIOS',
        swc_dash_ialm_codigo: 1445,
        swc_dash_valmcod: '02698',
        swc_dash_vEstablecimiento: 'HOSP SANTA ROSA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-MOQUEGUA',
        swc_dash_ialm_codigo: 7141,
        swc_dash_valmcod: '07732',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL MOQUEGUA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PASCO',
        swc_dash_ialm_codigo: 3995,
        swc_dash_valmcod: '00979',
        swc_dash_vEstablecimiento: 'HOSP DANIEL ALCIDES CARRION - PASCO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PIURA',
        swc_dash_ialm_codigo: 1150,
        swc_dash_valmcod: '02161',
        swc_dash_vEstablecimiento: 'HOSP DE APOYO CHULUCANAS',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PIURA',
        swc_dash_ialm_codigo: 1040,
        swc_dash_valmcod: '02021',
        swc_dash_vEstablecimiento: 'HOSP LAS MERCEDES-PAITA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PIURA',
        swc_dash_ialm_codigo: 4489,
        swc_dash_valmcod: '01910',
        swc_dash_vEstablecimiento: 'HOSPITAL DE APOYO III-SULLANA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PIURA',
        swc_dash_ialm_codigo: 1074,
        swc_dash_valmcod: '02084',
        swc_dash_vEstablecimiento: 'HOSPITAL DE LA AMISTAD PERU - COREA SANTA ROSA II-2',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-PUNO',
        swc_dash_ialm_codigo: 5247,
        swc_dash_valmcod: '03251',
        swc_dash_vEstablecimiento: 'HOSPITAL REGIONAL "MANUEL NUÑEZ BUTRON" DE PUNO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-TACNA',
        swc_dash_ialm_codigo: 1531,
        swc_dash_valmcod: '02864',
        swc_dash_vEstablecimiento: 'HOSPITAL DE APOYO DEPARTAMENTAL HIPOLITO UNANUE',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-TUMBES',
        swc_dash_ialm_codigo: 9231,
        swc_dash_valmcod: '17077',
        swc_dash_vEstablecimiento: 'HOSPITAL REGIONAL JOSE ALFREDO MENDOZA OLAVARRIA JAMO II-2',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-UCAYALI',
        swc_dash_ialm_codigo: 6199,
        swc_dash_valmcod: '05577',
        swc_dash_vEstablecimiento: 'HOSP DE APOYO N?2 -YARINACOCHA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRESA-UCAYALI',
        swc_dash_ialm_codigo: 6198,
        swc_dash_valmcod: '05576',
        swc_dash_vEstablecimiento: 'HOSPITAL REGIONAL DE PUCALLPA Nro 01',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3247,
        swc_dash_valmcod: '06211',
        swc_dash_vEstablecimiento: 'HOSP DE APOYO SANTA ROSA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3249,
        swc_dash_valmcod: '06213',
        swc_dash_vEstablecimiento: 'HOSP DE EMERGENCIAS JOSE CASIMIRO ULLOA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3243,
        swc_dash_valmcod: '06207',
        swc_dash_vEstablecimiento: 'HOSP NACIONAL ARZOBISPO LOAYZA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 2942,
        swc_dash_valmcod: '05617',
        swc_dash_vEstablecimiento: 'HOSPITAL DE SAN JUAN DE LURIGANCHO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3248,
        swc_dash_valmcod: '06212',
        swc_dash_vEstablecimiento: 'HOSPITAL ESPECIALIZADO EMERGENCIAS PEDIATRICAS',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-E'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3251,
        swc_dash_valmcod: '06215',
        swc_dash_vEstablecimiento: 'HOSPITAL NACIONAL DOCENTE MADRE NIÑO SAN BARTOLOME',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3242,
        swc_dash_valmcod: '06206',
        swc_dash_vEstablecimiento: 'HOSPITAL NACIONAL DOS DE MAYO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3250,
        swc_dash_valmcod: '06214',
        swc_dash_vEstablecimiento: 'HOSPITAL VICTOR LARCO HERRERA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3245,
        swc_dash_valmcod: '06209',
        swc_dash_vEstablecimiento: 'INST. ESPECIALIZADO CIENCIAS NEUROLOGICA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3253,
        swc_dash_valmcod: '06217',
        swc_dash_vEstablecimiento: 'INSTITUTO ESPECIALIZADO NACIONAL DE OFTALMOLOGIA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3246,
        swc_dash_valmcod: '06210',
        swc_dash_vEstablecimiento: 'INSTITUTO NACIONAL DE ENFERMEDADES NEOPLASICAS',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 3252,
        swc_dash_valmcod: '06216',
        swc_dash_vEstablecimiento: 'INSTITUTO NACIONAL DE SALUD DEL NIÑO - BREÑA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA CENTRO',
        swc_dash_ialm_codigo: 9289,
        swc_dash_valmcod: '16918',
        swc_dash_vEstablecimiento: 'INSTITUTO NACIONAL DE SALUD DEL NIÑO-SAN BORJA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'SIN CATEGORIA'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA SUR',
        swc_dash_ialm_codigo: 93162,
        swc_dash_valmcod: '23159',
        swc_dash_vEstablecimiento: 'HOSPITAL DE EMERGENCIAS VILLA EL SALVADOR',
        swc_dash_iTotalProducto: 0,
        Categoria: 'I-3'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA SUR',
        swc_dash_ialm_codigo: 6394,
        swc_dash_valmcod: '05987',
        swc_dash_vEstablecimiento: 'HOSPITAL MARIA AUXILIADORA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'DIRIS-LIMA SUR',
        swc_dash_ialm_codigo: 7143,
        swc_dash_valmcod: '07734',
        swc_dash_vEstablecimiento: 'INSTITUTO NACIONAL DE REHABILITACION',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'GERESA-AREQUIPA',
        swc_dash_ialm_codigo: 4116,
        swc_dash_valmcod: '01232',
        swc_dash_vEstablecimiento: 'HOSP III GOYENECHE',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'GERESA-CAJAMARCA',
        swc_dash_ialm_codigo: 5543,
        swc_dash_valmcod: '04210',
        swc_dash_vEstablecimiento: 'HOSPITAL GENERAL DE JAEN',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LA LIBERTAD',
        swc_dash_ialm_codigo: 2724,
        swc_dash_valmcod: '05195',
        swc_dash_vEstablecimiento: 'HOSP BELEN DE TRUJILLO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LA LIBERTAD',
        swc_dash_ialm_codigo: 2725,
        swc_dash_valmcod: '05196',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL DOCENTE DE TRUJILLO',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LA LIBERTAD',
        swc_dash_ialm_codigo: 2726,
        swc_dash_valmcod: '05197',
        swc_dash_vEstablecimiento: 'INST. INSTITUTO REGIONAL DE OFTALMOLOGIA',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LA LIBERTAD',
        swc_dash_ialm_codigo: 8058,
        swc_dash_valmcod: '07277',
        swc_dash_vEstablecimiento: 'INST. REGIONAL DE ENFERMEDADES NEOPLASIC',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-2'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LAMBAYEQUE',
        swc_dash_ialm_codigo: 5611,
        swc_dash_valmcod: '04370',
        swc_dash_vEstablecimiento: 'HOSP PROVINCIAL DOCENTE BELEN-L',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-1'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LAMBAYEQUE',
        swc_dash_ialm_codigo: 5589,
        swc_dash_valmcod: '04317',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL DOCENTE LAS MERCEDES',
        swc_dash_iTotalProducto: 0,
        Categoria: 'II-2'
      },
      {
        "swc_dash_vDiresa": 'GERESA-LAMBAYEQUE',
        swc_dash_ialm_codigo: 8380,
        swc_dash_valmcod: '11470',
        swc_dash_vEstablecimiento: 'HOSP REGIONAL LAMBAYEQUE',
        swc_dash_iTotalProducto: 0,
        Categoria: 'III-1'
      }
    ]

  constructor(private location: Location,private route: Router) {
    addIcons({ chevronForwardOutline, mapOutline, peopleOutline });
  }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }

  showDetail(record:any):void {
    this.route.navigate(['/stock-establishment']);
  }

  showContact(record:any): void {
    //console.log(record);
    this.route.navigate(['/contact']);
  }

  showMap(record:any): void {
    //console.log(record);
    this.route.navigate(['/map']);
  }

}

import { Component, OnInit, Inject  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SurveyList } from 'src/app/interfaces/SurveyList';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SurveyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public survey: SurveyList[],
    private fb: FormBuilder) {
    }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
   
  }

  getPregunta9Value(data:any) {
    const formattedAnswers = [];

    if (data.television) {
      formattedAnswers.push('Televisión');
    }
    if (data.pagina) {
      formattedAnswers.push('Página web');
    }
    if (data.radio) {
      formattedAnswers.push('Radio');
    }
    if (data.medios) {
      formattedAnswers.push('Medios gráficos');
    }
    if (data.facebook) {
      formattedAnswers.push('facebook');
    }
    if (data.recomendaciones) {
      formattedAnswers.push('Recomendaciones');
    }
    if (data.otro) {
      formattedAnswers.push('Otra');
    }
    // Devuelve una cadena formateada con las respuestas.
    return formattedAnswers.join(', ')
  }
  getPregunta10Value(data: any) {
    const selectedReasons = [];
  
    if (data.conocer) {
      selectedReasons.push('Ya conocía y me gustó el lugar');
    }
    if (data.recomendacion) {
      selectedReasons.push('Me lo recomendaron');
    }
    if (data.promocion) {
      selectedReasons.push('Vi una promoción en medios');
    }
    if (data.tranquilidad) {
      selectedReasons.push('Porque es un lugar tranquilo para la familia');
    }
    if (data.paisajes) {
      selectedReasons.push('Por sus paisajes');
    }
    if (data.eventos) {
      selectedReasons.push('Por sus eventos');
    }
    if (data.amabilidad) {
      selectedReasons.push('Por la amabilidad de los vecinos');
    }
  
    return selectedReasons.join(', ');
  }
  getPregunta11Value(data: any) {   
    const reservacionValue = data.reservacion;
    const cualValue = data.cual;
  
    let respuesta = '';
  
    if (reservacionValue === 'conReserva') {
      respuesta = `Con Reserva - A través de: ${cualValue}`;
    } else if (reservacionValue === 'sinReserva') {
      respuesta = 'Sin Reserva';
    }
  
    return respuesta;
  }
  getPregunta12Value(data: any) {
    const values = data;
    let respuesta = '';
  
    if (values.hotel) {
      respuesta += 'Hotel, ';
    }
    if (values.cabaña) {
      respuesta += 'Cabaña, ';
    }
    if (values.hosteria) {
      respuesta += 'Hostería, ';
    }
    if (values.camping) {
      respuesta += 'Camping, ';
    }
    if (values.casa) {
      respuesta += 'Casa de alquiler, ';
    }
    
    const otroValue = values.otro ? values.otro : '';
  
    if (respuesta) {
      respuesta = respuesta.slice(0, -2); 
      respuesta += ' - Otro: ' + otroValue;
    } else {
      respuesta = 'Otro: ' + otroValue;
    }
  
    return respuesta;
  }
  getPregunta13Value(data: any) {
    const satisfaccion = data.satisfaccion;
  
    if (satisfaccion) {
      return `Servicio en el hospedaje: ${satisfaccion}`;
    } else {
      return 'No tengo una evalución que hacer.';
    }
  }
  getPregunta14Value(data: any) {
    const informacion = data.informacion;
    if (informacion === 'si') {
      const cual = data.cual;
      if (cual) {
        return `Recibió material informativo: Sí, ${cual}`;
      } else {
        return 'Recibió material informativo: Sí';
      }
    } else if (informacion === 'no') {
      return 'No recibí material informativo.';
    } else {
      return 'No se ha seleccionado una respuesta.';
    }
  }
  getPregunta15Value(data: any) {
    const informes = data.informes;
    if (informes === 'si') {
      return 'Si recibí información';
    } else if (informes === 'no') {
      return 'No recibí';
    } else {
      return 'No se ha seleccionado una respuesta.';
    }
  }
  getPregunta16Value(data: any): string {
    if (data.merlo) {
      return 'Oficina de Plazoleta Merlo';
    } else if (data.rotonda) {
      return 'Oficina de la Rotonda de ingreso';
    } else if (data.terminal) {
      return 'Oficina de la Terminal';
    } else {
      return 'No seleccionó una oficina';
    }
  }
  getPregunta17Value(data: any): string {
    const selectedOptions: string[] = [];
  
    if (data.hospedaje) {
      selectedOptions.push('Hospedaje');
    }
    if (data.paseos) {
      selectedOptions.push('Paseos');
    }
    if (data.eventos) {
      selectedOptions.push('Eventos');
    }
    if (data.gastronomia) {
      selectedOptions.push('Gastronomía');
    }
    if (data.aventura) {
      selectedOptions.push('Turismo Aventura');
    }
    if (data.servicios) {
      selectedOptions.push('Servicios');
    }
    if (data.rutas) {
      selectedOptions.push('Rutas');
    }
  
    if (selectedOptions.length > 0) {
      return selectedOptions.join(', '); 
    } else {
      const otro = data.otro;
      return otro ? `Otros: ${otro}` : 'No seleccionó ninguna opción';
    }
  }
  getPregunta18Value(data: any): string {
    const selectedOptions: string[] = [];
  
    if (data.personalmente) {
      selectedOptions.push('Personalmente');
    }
    if (data.mail) {
      selectedOptions.push('Vía mail');
    }
    if (data.facebook) {
      selectedOptions.push('Vía Facebook');
    }
    if (data.telefono) {
      selectedOptions.push('Vía Telefónica');
    }
  
    if (selectedOptions.length > 0) {
      return selectedOptions.join(', '); // Devuelve las opciones seleccionadas como una cadena separada por comas
    } else {
      const otro = data.otro;
      return otro ? `Otros: ${otro}` : 'No seleccionó ningún medio';
    }
  }
  getPregunta19Value(data:any): string {
    const selectedOptions: string[] = [];
  
    if (data.folleto) {
      selectedOptions.push('Folletos');
    }
    if (data.revista) {
      selectedOptions.push('Revistas');
    }
    if (data.plano) {
      selectedOptions.push('Planos');
    }
    if (data.calcomania) {
      selectedOptions.push('Calcomanías');
    }
    if (data.guia) {
      selectedOptions.push('Guía de Servicios');
    }
  
    if (selectedOptions.length > 0) {
      return selectedOptions.join(', '); // Devuelve las opciones seleccionadas como una cadena separada por comas
    } else {
      return 'No se entregó ningún material';
    }
  }
  getPregunta20Value(data: any): string {
    const calidadInformacion = data.calidadInformacion;
  
    switch (calidadInformacion) {
      case 'excelente':
        return 'Excelente';
      case 'muyBuena':
        return 'Muy Buena';
      case 'buena':
        return 'Buena';
      case 'regular':
        return 'Regular';
      case 'mala':
        return 'Mala';
      case 'muyMala':
        return 'Muy Mala';
      case 'pesima':
        return 'Pésima';
      default:
        return 'No se especificó la calidad de la información';
    }
  }
  getPregunta21Value(data: any): string {
    const otraInfo = data.otraInfo;
  
    if (otraInfo === 'si') {
      return 'Sí, se brindó información adicional';
    } else {
      return 'No se brindó información adicional';
    }
  }
  getPregunta22Value(data:any): string {
    const espectaculo = data.espectaculo;
    const espectaculoCercano = data.espectaculoCercano;
    const recreacion = data.recreacion;
    const deporte = data.deporte;
    const aventura = data.aventura;
    const paseo = data.paseo;
    const otro = data.otro;
  
    const opcionesSeleccionadas = [];
  
    if (espectaculo) {
      opcionesSeleccionadas.push('Espectáculos en Mina Clavero');
    }
  
    if (espectaculoCercano) {
      opcionesSeleccionadas.push('Espectáculos en localidades cercanas');
    }
  
    if (recreacion) {
      opcionesSeleccionadas.push('Recreación');
    }
  
    if (deporte) {
      opcionesSeleccionadas.push('Actividades Deportivas');
    }
  
    if (aventura) {
      opcionesSeleccionadas.push('Turismo Aventura');
    }
  
    if (paseo) {
      opcionesSeleccionadas.push('Paseos');
    }
  
    if (otro) {
      opcionesSeleccionadas.push(`Otros: ${otro}`);
    }
  
    return opcionesSeleccionadas.length > 0 ? opcionesSeleccionadas.join(', ') : 'No se brindó información adicional';
  }
  getPregunta23Value(data:any): string {
    const destinoCompleto = data.destinoCompleto;
    const porQue = data.porQue;
  
    if (destinoCompleto === 'si') {
      if (porQue) {
        return `Sí, porque: ${porQue}`;
      } else {
        return 'Sí';
      }
    } else {
      if (porQue) {
        return `No, porque: ${porQue}`;
      } else {
        return 'No';
      }
    }
  }
  getPregunta24Value(data:any): string {
    const recomendacion = data.recomendacion.toLowerCase();
    const porQue = data.porQue;
  
    if (recomendacion === 'si') {
      if (porQue) {
        return `Sí, porque: ${porQue}`;
      } else {
        return 'Sí';
      }
    } else {
      if (porQue) {
        return `No, porque: ${porQue}`;
      } else {
        return 'No';
      }
    }
  }
  
  
  
  
  
  
  
  
  
  
  
}

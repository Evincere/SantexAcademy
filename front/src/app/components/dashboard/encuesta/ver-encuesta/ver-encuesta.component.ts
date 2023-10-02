import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { AbstractControl, FormBuilder, FormGroup, FormGroupName, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Survey } from 'src/app/interfaces/Survey';
import { UserService } from 'src/app/services/usuario.service'


@Component({
  selector: 'app-ver-encuesta',
  templateUrl: './ver-encuesta.component.html',
  styleUrls: ['./ver-encuesta.component.css']
})



export class VerEncuestaComponent implements OnInit {

  setcheckbox = true;
  
  accordion: any;
  pasoUno: FormGroup;
  pregunta9: FormGroup;
  pregunta10: FormGroup;
  pregunta11: FormGroup;
  pregunta12: FormGroup;
  pregunta13: FormGroup;
  pregunta14: FormGroup;
  pregunta15: FormGroup;
  pregunta16: FormGroup;
  pregunta17: FormGroup;
  pregunta18: FormGroup;
  pregunta19: FormGroup;
  pregunta20: FormGroup;
  pregunta21: FormGroup;
  pregunta22: FormGroup;
  pregunta23: FormGroup;
  pregunta24: FormGroup;
  formEnviado: any;



  constructor(
    public dialogRef: MatDialogRef<VerEncuestaComponent>,    
    private fb: FormBuilder,
    private _snackBar: MatSnackBar, 
    private http: HttpClient,
    private userService: UserService,
    private route: Router) {

      //pregunta 9
      this.pregunta9 = this.fb.group({
        television: [false],
        pagina: [false],
        radio: [false],
        medios: [false],
        facebook: [false],
        recomendaciones: [false],
        otro: [''],
      }, { validators: this.alMenosUna });

      //pregunta 10
      this.pregunta10 = this.fb.group({
        conocer: [false],
        recomendacion: [false],
        promocion: [false],
        tranquilidad: [false],
        paisajes: [false],
        eventos: [false],
        amabilidad: [false],
        otro: ['']
      }, { validators: this.alMenosUna });

      //pregunta 11
      this.pregunta11 = this.fb.group({
        reservacion: [null, Validators.required],
        cual: ['']
      });

      //pregunta 12
      this.pregunta12 = this.fb.group({
        hotel: [false],
        cabaña: [false],
        hosteria: [false],
        camping: [false],
        casa: [false],
        otro: ['']
      }, { validators: this.alMenosUna });

      //pregunta 13
      this.pregunta13 = this.fb.group({
        satisfaccion: [null, Validators.required],
      });

      //pregunta 14
      this.pregunta14 = this.fb.group({
        informacion: [null, Validators.required],
        cual: ['']
      });

      //pregunta 15
      this.pregunta15 = this.fb.group({
        informes: [null, Validators.required]
      });

      //pregunta 16
      this.pregunta16 = this.fb.group({
        rotonda: [false],
        merlo: [false],
        terminal: [false],
      }, { validators: this.alMenosUna });

      //pregunta 17
      this.pregunta17 = this.fb.group({
        hospedaje: [false],
        paseos: [false],
        eventos: [false],
        gastronomia: [false],
        aventura: [false],
        servicios: [false],
        rutas: [false],
        otro: ['']
      }, { validators: this.alMenosUna });

      //pregunta 18
      this.pregunta18 = this.fb.group({
        personalmente: [false],
        mail: [false],
        facebook: [false],
        telefono: [false],
        otro: ['']
      }, { validators: this.alMenosUna });

      //pregunta 19
      this.pregunta19 = this.fb.group({
        folleto: [false],
        revista: [false],
        plano: [false],
        calcomania: [false],
        guia: [false]
      }, { validators: this.alMenosUna });

      //pregunta 20
      this.pregunta20 = this.fb.group({
        calidadInformacion: [null, Validators.required],
      });

      //pregunta 21
      this.pregunta21 = this.fb.group({
        otraInfo: [null, Validators.required]
      });

      //pregunta 22
      this.pregunta22 = this.fb.group({
        espectaculo: [false],
        espectaculoCercano: [false],
        recreacion: [false],
        deporte: [false],
        aventura: [false],
        paseo: [false],
        otro: ['']
      }, { validators: this.alMenosUna });

      //pregunta 23
      this.pregunta23 = this.fb.group({
        destinoCompleto: [null, Validators.required],
        porQue: ['']
      });

      //pregunta 24
      this.pregunta24 = this.fb.group({
        recomendacion: [null, Validators.required],
        porQue: ['']
      });

      this.pasoUno = this.fb.group({
        pregunta1: ['', Validators.required],
        pregunta2: ['', Validators.required],
        pregunta3: ['', Validators.required],
        pregunta4: ['', Validators.required],
        pregunta5: ['', Validators.required],
        pregunta6: ['', Validators.required],
        pregunta7: ['', Validators.required],
        pregunta8: ['', Validators.required],
        pregunta9: this.pregunta9, // asignando el FormGroup pregunta9
        pregunta10: this.pregunta10, // asignando el FormGroup pregunta10
        pregunta11: this.pregunta11, // asignando el FormGroup pregunta11
        pregunta12: this.pregunta12, // asignando el FormGroup pregunta12
        pregunta13: this.pregunta13, // asignando el FormGroup pregunta13
        pregunta14: this.pregunta14, // asignando el FormGroup pregunta14
        pregunta15: this.pregunta15, // asignando el FormGroup pregunta15
        pregunta16: this.pregunta16, // asignando el FormGroup pregunta16
        pregunta17: this.pregunta17, // asignando el FormGroup pregunta17
        pregunta18: this.pregunta18, // asignando el FormGroup pregunta18
        pregunta19: this.pregunta19, // asignando el FormGroup pregunta19
        pregunta20: this.pregunta20, // asignando el FormGroup pregunta20
        pregunta21: this.pregunta21, // asignando el FormGroup pregunta21
        pregunta22: this.pregunta22, // asignando el FormGroup pregunta22
        pregunta23: this.pregunta23, // asignando el FormGroup pregunta23
        pregunta24: this.pregunta24, // asignando el FormGroup pregunta24
            
      });

    }

  ngOnInit(): void {}

  cancelar() {
     this.dialogRef.close();
  }


// Funciones de Sol expansion comp ts

  private appUrl = environment.APP_URL;

  step = 0;

  nextStep(event: Event) {
    event.preventDefault(); // Evita la acción predeterminada del botón
    this.step++;
  }

  prevStep(event: Event) {
    event.preventDefault(); // Evita la acción predeterminada del botón
    this.step--;
  }

  setStep(index: number) {
    this.step = index;
  }

  //función para que al menos una respuesta de las múltiples sea seleccionada y valide. 
   alMenosUna(control: AbstractControl): ValidationErrors | null {
    const selectedOptions = Object.values(control.value).some(value => value === true);
  
    if (selectedOptions) {
      return null; // al menos una opción seleccionada, válido
    } else {
      return { alMenosUna: true }; // ninguna opción seleccionada, inválido
    }
  }
  
 resetForm(event: Event) {
    event.preventDefault();
    this.pasoUno.reset(); //reinicia el formulario.
  } 
  
  async enviar() {
  
  console.log (this.pasoUno)
  // /* salteo - borrar
  
    if (this.pasoUno.valid) {
      const formData = this.pasoUno.value;
      let idUser;

      try {
        idUser = await this.userService.getIdUserSession();
      } catch (error) {
        console.error('No se pudo obtener el ID del usuario:', error);
        // todo: Manejar el error por ejemplo, mostrar un mensaje al usuario
        return; // Salir del método si no se pudo obtener el ID del usuario
     }
      
      const survey: Survey = {
        email: formData.pregunta2,
        questions: {},
        surveyorId: idUser,
      };
  
      // Agregar las respuestas de las preguntas al objeto survey
      for (let i = 1; i <= 24; i++) {
        const preguntaKey = `pregunta${i}`;
        survey.questions[preguntaKey] = formData[preguntaKey];
      }
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      
      const requestOptions = {
        headers: headers
      };
      
      try {
        const response = await this.http.post(`${this.appUrl}api/surveys/`, survey, requestOptions).toPromise();
        if(!response) {
          return;
        }
        this.formEnviado = true;
  
        this._snackBar.open('Encuesta Enviada!!!', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.route.navigate(['/dashboard']); // todo: redigirir al listado de encuestas
      } catch (error) {
        console.error('Error al enviar la encuesta:', error);
        // todo: Manejar el error aquí
      }
    }
    // */
  
  
  
  }



}

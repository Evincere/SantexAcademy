export interface SurveyList {
  id?: number; // jz id de registro de la encuesta
  nombre: string;
  apellido: string;
  email: string;
  questions: {
    [index: string]: string | boolean | number | null;
  };
  surveyorId: number | null;
  createdAt: Date; // jz
}

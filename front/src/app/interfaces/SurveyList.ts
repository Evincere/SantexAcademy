export interface SurveyList {
  id?: number; // jz id de registro de la encuesta
  nombre: string;
  email: string;
  questions: {
    [index: string]: string | number | boolean | null;
  };
  surveyorId: number | null;
  createdAt: Date; // jz
}

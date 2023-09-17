export interface surveyList {
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

//const questionLabels: { [key: string]: string } = {
//
//  pregunta1: "¿Cuál es su nombre?",
//  pregunta2: "¿Cuál es su correo electrónico?",
//  pregunta3: "¿Cuál es su edad?",
//  // ... Agrega las descripciones de las demás preguntas aquí
//};

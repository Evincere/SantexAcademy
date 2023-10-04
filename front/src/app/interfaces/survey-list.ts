export interface surveyList {
    id?: number; // jz id de registro de la encuesta
    nombre: string; //Nombre del encuestador
    apellido: string; //Ap Encuestador
    email: string; // email del encuestado
    questions: {
      [index: string]: string | boolean | number | null;
    };
    surveyorId: number | null; // id del encuestador
    createdAt: Date; // fecha de la encuesta
    
  }

//const questionLabels: { [key: string]: string } = {
//
//  pregunta1: "¿Cuál es su nombre?",
//  pregunta2: "¿Cuál es su correo electrónico?",
//  pregunta3: "¿Cuál es su edad?",
//  // ... Agrega las descripciones de las demás preguntas aquí
//};

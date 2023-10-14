/* eslint-disable no-plusplus */
const faker = require('faker');

function randomBoolean() {
  return Math.random() < 0.5;
}
const generateSurveyResults = async (count, surveyorIds) => {
  const surveyResults = [];
  for (let i = 0; i < count; i++) {
    const email = faker.internet.email();
    const randomSurveyorId = surveyorIds[Math.floor(Math.random() * surveyorIds.length)];
    const createdAt = faker.date.between('2015-01-01', '2023-08-15');
    const updatedAt = faker.date.between(createdAt, '2023-08-15');
    const deletedAt = null;
    const questions = {
      pregunta1: faker.name.firstName(),
      pregunta2: faker.internet.email(),
      // pregunta3: faker.random.number(),
      pregunta3: String(faker.datatype.number()),
      pregunta4: faker.random.arrayElement(['m', 'f']), // Assuming is gender
      pregunta5: faker.address.city(),
      pregunta6: faker.address.state(),
      pregunta7: faker.address.country(),
      pregunta8: faker.random.word(),
      pregunta9: {
        otro: faker.random.boolean(),
        radio: randomBoolean(),
        medios: randomBoolean(),
        pagina: randomBoolean(),
        facebook: randomBoolean(),
        television: randomBoolean(),
        recomendaciones: randomBoolean(),
      },
      pregunta10: {
        otro: faker.random.boolean(),
        conocer: randomBoolean(),
        eventos: randomBoolean(),
        paisajes: randomBoolean(),
        promocion: randomBoolean(),
        amabilidad: randomBoolean(),
        tranquilidad: randomBoolean(),
        recomendacion: true,
      },
      pregunta11: {
        cual: '',
        reservacion: faker.random.arrayElement(['sinReserva', 'conReserva']),
      },
      pregunta12: {
        casa: randomBoolean(),
        otro: '',
        hotel: randomBoolean(),
        cabaña: randomBoolean(),
        camping: randomBoolean(),
        hosteria: true,
      },
      pregunta13: {
        satisfaccion: 'buena',
      },
      pregunta14: {
        cual: '',
        informacion: 'no',
      },
      pregunta15: {
        informes: 'no',
      },
      pregunta16: {
        merlo: true,
        rotonda: randomBoolean(),
        terminal: randomBoolean(),
      },
      pregunta17: {
        otro: '',
        rutas: randomBoolean(),
        paseos: randomBoolean(),
        eventos: true,
        aventura: randomBoolean(),
        hospedaje: randomBoolean(),
        servicios: randomBoolean(),
        gastronomia: randomBoolean(),
      },
      pregunta18: {
        mail: randomBoolean(),
        otro: '',
        facebook: true,
        telefono: randomBoolean(),
        personalmente: randomBoolean(),
      },
      pregunta19: {
        guia: randomBoolean(),
        plano: randomBoolean(),
        folleto: randomBoolean(),
        revista: true,
        calcomania: randomBoolean(),
      },
      pregunta20: {
        calidadInformacion: 'muyBuena',
      },
      pregunta21: {
        otraInfo: 'no',
      },
      pregunta22: {
        otro: '',
        paseo: randomBoolean(),
        deporte: randomBoolean(),
        aventura: randomBoolean(),
        recreacion: randomBoolean(),
        espectaculo: randomBoolean(),
        espectaculoCercano: true,
      },
      pregunta23: {
        porQue: '',
        destinoCompleto: 'si',
      },
      pregunta24: {
        porQue: '',
        recomendacion: 'no',
      },
    };

    surveyResults.push({
      id: i + 1,
      email,
      surveyorId: randomSurveyorId,
      createdAt,
      updatedAt,
      deletedAt,
      questions: JSON.stringify(questions), // Convert questions to JSON string
    });
  }
  return surveyResults;
};

module.exports = {
  async up(queryInterface) {
    const surveyors = await queryInterface.sequelize.query(
      "SELECT id FROM Users WHERE rol LIKE '%encuestador%'",
    );
    const surveyorIds = surveyors[0].map((surveyor) => surveyor.id);

    const surveyResults = await generateSurveyResults(50, surveyorIds);
    await queryInterface.bulkInsert('Surveys', surveyResults, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Surveys', null, {});
  },
};

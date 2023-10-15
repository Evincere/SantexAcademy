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
      pregunta3: String(faker.datatype.number()),
      pregunta4: faker.random.arrayElement(['m', 'f']),
      pregunta5: faker.address.city(),
      pregunta6: faker.address.state(),
      pregunta7: faker.address.country(),
      pregunta8: faker.random.arrayElement(['solo', 'con la familia', 'con un grupo de amigos', 'con mi pareja']),
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
        recomendacion: randomBoolean(),
      },
      pregunta11: {
        cual: '',
        reservacion: faker.random.arrayElement(['sinReserva', 'conReserva']),
      },
      pregunta12: {
        casa: randomBoolean(),
        otro: faker.random.arrayElement([
          'Apartamento',
          'Resort',
          'Albergue',
          'Pensión',
          'Motel',
          'Casa rural',
          'Villa',
          'Posada',
          'Refugio',
          'Parador',
          'Hostal',
          'Alojamiento rural',
          'Bed and Breakfast (B&B)',
          'Lodge',
          'Monasterio convertido',
        ]),
        hotel: randomBoolean(),
        cabaña: randomBoolean(),
        camping: randomBoolean(),
        hosteria: randomBoolean(),
      },
      pregunta13: {
        satisfaccion: faker.random.arrayElement([
          'excelente',
          'muy Buena',
          'buena',
          'regular',
          'mala',
          'muy mala',
          'pesima',
        ]),
      },
      pregunta14: {
        cual: faker.random.arrayElement([
          'Folletos turísticos',
          'Revistas de la región',
          'Mapas y planos',
          'Folletería de eventos locales',
          'Guias de restaurantes',
          'Información sobre rutas y transporte',
          'Calcomanías promocionales',
          'Folletos de atracciones turísticas',
          'Guías de actividades al aire libre',
          'Información sobre alojamiento',
          'Folletos de parques y áreas naturales',
          'Folletos de museos y sitios históricos',
          '',
        ]),
        informacion: faker.random.arrayElement(['si']),
      },
      pregunta15: {
        informes: faker.random.arrayElement(['si', 'no']),
      },
      pregunta16: {
        merlo: randomBoolean(),
        rotonda: randomBoolean(),
        terminal: randomBoolean(),
      },
      pregunta17: {
        otro: faker.random.arrayElement([
          'Información sobre atracciones turísticas',
          'Eventos y actividades locales',
          'Rutas y mapas de la región',
          'Información sobre alojamiento',
          'Recomendaciones gastronómicas',
          'Información sobre parques y áreas naturales',
          'Historia y cultura local',
          'Deportes y actividades al aire libre',
          'Servicios turísticos',
          'Gastronomía local',
          'Información sobre playas y áreas de baño',
          'Eventos culturales y festivales',
          'Datos sobre museos y galerías de arte',
        ]),
        rutas: randomBoolean(),
        paseos: randomBoolean(),
        eventos: randomBoolean(),
        aventura: randomBoolean(),
        hospedaje: randomBoolean(),
        servicios: randomBoolean(),
        gastronomia: randomBoolean(),
      },
      pregunta18: {
        mail: randomBoolean(),
        otro: '',
        facebook: randomBoolean(),
        telefono: randomBoolean(),
        personalmente: randomBoolean(),
      },
      pregunta19: {
        guia: randomBoolean(),
        plano: randomBoolean(),
        folleto: randomBoolean(),
        revista: randomBoolean(),
        calcomania: randomBoolean(),
      },
      pregunta20: {
        calidadInformacion: faker.random.arrayElement([
          'excelente',
          'muy Buena',
          'buena',
          'regular',
          'mala',
          'muy mala',
          'pesima',
        ]),
      },
      pregunta21: {
        otraInfo: faker.random.arrayElement(['si', 'no']),
      },
      pregunta22: {
        otro: '',
        paseo: randomBoolean(),
        deporte: randomBoolean(),
        aventura: randomBoolean(),
        recreacion: randomBoolean(),
        espectaculo: randomBoolean(),
        espectaculoCercano: randomBoolean(),
      },
      pregunta23: {
        porQue: faker.random.arrayElement([
          'Hermosos paisajes naturales',
          'Playas junto a ríos cristalinos',
          'Amplia oferta de alojamiento',
          'Clima agradable durante todo el año',
          'Variedad de actividades al aire libre',
          'Eventos culturales y festivales',
          'Gastronomía local destacada',
          'Atractivos turísticos históricos',
          'Hospitalidad de los residentes',
          'Posibilidades de turismo de aventura',
          'Rutas de senderismo escénicas',
          'Oferta de deportes acuáticos',
          'Mercados locales y artesanías',
          'Sitios para practicar senderismo',
          'Cercanía a parques nacionales',
          'Rutas escénicas para conducir',
          'Vida nocturna y entretenimiento',
        ]),
        destinoCompleto: faker.random.arrayElement(['si']),
      },
      pregunta24: {
        porQue: faker.random.arrayElement([
          'Hermosos paisajes naturales',
          'Playas junto a ríos cristalinos',
          'Amplia oferta de alojamiento',
          'Clima agradable durante todo el año',
          'Variedad de actividades al aire libre',
          'Eventos culturales y festivales',
          'Gastronomía local destacada',
          'Atractivos turísticos históricos',
          'Hospitalidad de los residentes',
          'Posibilidades de turismo de aventura',
          'Rutas de senderismo escénicas',
          'Oferta de deportes acuáticos',
          'Mercados locales y artesanías',
          'Sitios para practicar senderismo',
          'Cercanía a parques nacionales',
          'Rutas escénicas para conducir',
          'Vida nocturna y entretenimiento',
          'Excelente relación calidad-precio',
          'Seguridad y tranquilidad',
          'Buena infraestructura turística',
        ]),
        recomendacion: 'si',
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

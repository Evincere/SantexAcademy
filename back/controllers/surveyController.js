/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
const surveyService = require('../services/surveyService');
const emailService = require('../utils/sendgrid');

async function createSurvey(req, res) {
  try {
    const { email, questions, surveyorId } = req.body;
    const newSurvey = await surveyService.createSurvey({
      email,
      questions,
      surveyorId,
    });
    // Enviar correo de confirmación
	
    let formattedQuestions = '';
    const fromName = 'Municipalidad Mina Clavero';
    const subject = 'Confirmación de encuesta realizada';
    const bodyText = 'Gracias por su participación';
    const surveyEmailDate = new Date();

    // eslint-disable-next-line no-restricted-syntax
    // for (const [index, question] of Object.entries(questions)) {
    // formattedQuestions += `<p><strong>Pregunta ${index}:</strong> ${question}</p>`;
    // }
    
    /* eslint no-tabs: ["error", { allowIndentationTabs: true }] */
    formattedQuestions = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="format-detection" content="date=no">
	<meta name="format-detection" content="address=no">
	<meta name="format-detection" content="telephone=no">
	<meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <!--<![endif]-->
	<title>Email - Encuesta Informació Turística-</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->
	

	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none }
		a { color:#8737ff; text-decoration:none }
		p { padding:0 !important; margin:0 !important } 
		img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
		.mcnPreviewText { display: none !important; }

				
		/* Mobile styles */
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
			u + .body .gwfw { width:100% !important; width:100vw !important; }

			.m-shell { width: 100% !important; min-width: 100% !important; }
			
			.m-center { text-align: center !important; }
			
			.center { margin: 0 auto !important; }
			.nav { text-align: center !important; } 
			
			.td { width: 100% !important; min-width: 100% !important; }
			.bg { height: auto !important; -webkit-background-size: cover !important; background-size: cover !important; }

			.m-br-15 { height: 15px !important; }
			.p30-15 { padding: 30px 15px !important; }
			.pb40 { padding-bottom: 40px !important; }
			.pb0 { padding-bottom: 0px !important; }
			.pb20 { padding-bottom: 20px !important; }

			.m-td,
			.m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			.m-height { height: auto !important; }

			.m-block { display: block !important; }

			.fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

			.column,
			.column-top,
			.column-dir,
			.column-bottom,
			.column-dir-top,
			.column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }

			.content-spacing { width: 15px !important; }
		}
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4" class="gwfw">
		<tbody><tr>
			<td align="center" valign="top">
				<!-- Main -->
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td align="center" style="padding-bottom: 40px;" class="pb0">
							<!-- Shell -->
							<table width="650" border="0" cellspacing="0" cellpadding="0" class="m-shell">
								<tbody><tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<!-- Header -->
										
										<!-- END Header -->

										<!-- Hero -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tbody><tr>
												<td background="http://www.minaclavero.gov.ar/style/images/arma/04.jpg" bgcolor="#3c3c3c" valign="top" class="bg" width="6100px" style="
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    background-size: cover;
">
													<!--[if gte mso 9]>
													<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:650px; height: 475px">
														<v:fill type="frame" src="images/hero.jpg" color="#3c3c3c" />
														<v:textbox inset="0,0,0,0">
													<![endif]-->
													<div>
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															<tbody><tr>
																<td class="content-spacing" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																<td>
																	<table width="100%" border="0" cellspacing="0" cellpadding="0">
																		<tbody><tr>
																			<td style="padding: 40px 0px;">
																				<table width="100%" border="0" cellspacing="0" cellpadding="0">
																					<tbody><tr>
																						<td style="padding-bottom: 40px;" class="pb20">
																							<table width="100%" border="0" cellspacing="0" cellpadding="0">
																								<tbody><tr>
																									<th class="column" width="118" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																										<table width="100%" border="0" cellspacing="0" cellpadding="0">
																											<tbody><tr>
																												<td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="http://www.minaclavero.gov.ar/style/images/logo.png" width="150" border="0" alt=""></a></td>
																											</tr>
																										</tbody></table>
																									</th>
																									<th style="padding-bottom:20px !important; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" class="column" width="1"></th>
																									<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																										<table width="100%" border="0" cellspacing="0" cellpadding="0">
																											<tbody><tr>
																												<td class="nav" style="color:#ffffff; font-family:'Montserrat', Arial, sans-serif; font-size:14px; line-height:20px; text-align:right; min-width:auto !important; font-weight:500;">
																													<a href="http://www.minaclavero.gov.ar/armatuviaje.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ARMA TU VIAJE</span></a>
																													&nbsp; &nbsp; &nbsp;
																													<a href="http://www.minaclavero.gov.ar/descubriminaclavero.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">DESCUBRILA</span></a>
																													&nbsp; &nbsp; &nbsp;
																													<a href="http://www.minaclavero.gov.ar/eventos.php" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">AGENDA </span></a>
																												</td>
																											</tr>
																										</tbody></table>
																									</th>
																								</tr>
																							</tbody></table>
																						</td>
																					</tr>
																					<tr>
																						<td class="m-height" height="320">
																							<table width="100%" border="0" cellspacing="0" cellpadding="0">
																								<tbody><tr>
																									<td class="h2 white center" style="padding-bottom: 20px; font-family:'Montserrat', Arial, sans-serif; font-size:36px; line-height:46px; font-weight:300; color:#ffffff; text-align:center;">¡Muchas Gracias ${email}!</td>
																								</tr>
																								<tr>
																									<td class="text white center" style="padding-bottom: 2px; font-family:Arial, sans-serif; font-size:16px; line-height:30px; min-width:auto !important; color:#ffffff; text-align:center;">Hemos recibido tu Encuesta de Información Turística</td>
																								</tr>
																								<tr>
																									<td class="text white center" style="padding-bottom: 25px; font-family:Arial, sans-serif; font-size:16px; line-height:30px; min-width:auto !important; color:#ffffff; text-align:center;">Realizada el día: ${surveyEmailDate} </td>
																								</tr><tr>
																									<td align="center">
																										<table border="0" cellspacing="0" cellpadding="0">
																											<tbody><tr>
																												<td class="text-button text-button2" style="border:2px solid #8737ff; border-radius:5px; font-family:'Montserrat', Arial, sans-serif; font-size:14px; line-height:18px; text-align:center; font-weight:500; padding:12px 35px; color:#ffffff; background:#8737ff;"><a href="http://www.minaclavero.gov.ar/turismo.php" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">VIVÍ NATURALMENTE MINA</span></a></td>
																											</tr>
																										</tbody></table>
																									</td>
																								</tr>
																							</tbody></table>
																						</td>
																					</tr>
																				</tbody></table>
																			</td>
																		</tr>
																	</tbody></table>
																</td>
																<td class="content-spacing" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
															</tr>
														</tbody></table>
													</div>
													<!--[if gte mso 9]>
														</v:textbox>
														</v:rect>
													<![endif]-->
												</td>
											</tr>
										</tbody></table>
										<!-- END Hero -->
										
										<!-- Content / Title + Copy + Button -->
										
										<!-- END Content / Title + Copy + Button -->

										<!-- Content / FUll-Width Image Title + Copy  + Two Columns -->
										
										<!-- END Content / FUll-Width Image Title + Copy  + Two Columns -->

										<!-- Purple Content / Title + Copy + Button -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#8737ff">
											<tbody><tr>
												<td style="padding: 80px;" class="p30-15">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tbody><tr>
															<td class="h3 white" style="padding-bottom: 30px; font-family:'Montserrat', Arial, sans-serif; font-size:28px; line-height:37px; text-align:left; font-weight:300; color:#ffffff;">MAPA DE SERVICIOS</td>
														</tr>
														<tr>
															<td class="text white" style="padding-bottom: 26px; font-family:Arial, sans-serif; font-size:16px; line-height:30px; text-align:left; min-width:auto !important; color:#ffffff;">Accede al mapa de Mina Clavero con los puntos más importantes de la ciudad y las rutas de acceso.</td>
														</tr>
														<tr>
															<td align="left">
																<table border="0" cellspacing="0" cellpadding="0">
																	<tbody><tr>
																		<td class="text-button text-button-white" style="border-radius:5px; font-family:'Montserrat', Arial, sans-serif; font-size:14px; line-height:18px; text-align:center; font-weight:500; padding:12px 35px; color:#ffffff; border:2px solid #ffffff;"><a href="https://www.google.com/maps/d/u/0/viewer?mid=1zbSyh4DqfN5c4lOJFQxD_NkggNI&amp;ll=-31.72306193364785%2C-65.01188181988523&amp;z=15" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">VER MAPA</span></a></td>
																	</tr>
																</tbody></table>
															</td>
														</tr>
													</tbody></table>
												</td>
											</tr>
										</tbody></table>
										<!-- END Purple Content / Title + Copy + Button -->
										<!-- Content / Title + Copy + Gallery + Button -->
										<!-- END Content / Title + Copy + Gallery + Button -->
										<!-- Footer -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
											<tbody><tr>
												<td style="padding: 80px;" class="p30-15">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tbody><tr>
															<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tbody><tr>
																		<td class="text-footer m-center" style="padding-bottom: 15px; color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:18px; text-align:left; min-width:auto !important;">OFICINA TURISMO CENTRAL</td>
																	</tr>
																	<tr>
																		<td class="text-footer2 m-center" style="color:#999999; font-family:Arial, sans-serif; font-size:12px; line-height:16px; text-align:left; min-width:auto !important;">8:00 a 20:00 horas<br>Av. San Martín esq. Fleming  <br>(03544) 47-0171 / 55-9410 (Plazoleta) / 41-2138 (Rotonda) <br>&nbsp;<p> BY MIX_X - 2023 </p></td>
																	</tr>
																</tbody></table>
															</th>
															<th style="padding-bottom:25px !important; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" class="column" width="20"></th>
															<th class="column-bottom" width="118" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:bottom;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tbody><tr>
																		<td class="text-footer right m-center" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:18px; min-width:auto !important; text-align:right;"><a href="http://www.minaclavero.gov.ar/turismo.php" target="_blank" class="link-grey-u" style="color:#999999; text-decoration:underline;"><span class="link-grey-u" style="color:#999999; text-decoration:underline;">Darse de baja</span></a></td>
																	</tr>
																</tbody></table>
															</th>
														</tr>
													</tbody></table>
												</td>
											</tr>
										</tbody></table>
										<!-- END Footer -->
									</td>
								</tr>
							</tbody></table>
							<!-- END Shell -->
						</td>
					</tr>
				</tbody></table>
				<!-- END Main -->
			</td>
		</tr>
	</tbody></table>
</body></html>`;

    await emailService.sendConfirmationEmail(
      email,
      fromName,
      subject,
      bodyText,
      formattedQuestions,
    );
    return res.status(201).json({
      message: 'Encuesta creada exitosamente y correo de confirmación enviado',
      newSurvey,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al crear la encuesta: ${error.message}` });
  }
}

async function getSurveysByEmail(req, res) {
  try {
    const { email } = req.params;
    const surveys = await surveyService.findByEmail(email);
    res.status(200).json(surveys);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error al obtener las encuestas por email: ${error.message}`,
      });
  }
}

async function getAllSurveys(req, res) {
  try {
    const surveys = await surveyService.findAll();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer todas las encuestas' });
  }
}

async function getSurveyById(req, res) {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const survey = await surveyService.findById(id);
    if (survey) {
      res.status(200).json(survey);
    } else {
      res.status(404).json({ message: 'Encuesta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al traer encuesta por su id' });
  }
}

async function deleteSurvey(req, res) {
  try {
    const { id } = req.params;
    await surveyService.deleteSurvey(id);
    res.status(200).json({ message: `Se ha borrado el registro con id ${id}` });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar borrar el registro con id: ${req.params.id}`,
    });
  }
}

async function updateSurvey(req, res) {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedSurvey = await surveyService.updateSurvey(id, newData);
    res.status(200).json(updatedSurvey);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la encuesta' });
  }
}

async function restoreSurvey(req, res) {
  const { id } = req.params;

  try {
    const restoredSurvey = await surveyService.restoreSurvey(id);

    if (!restoredSurvey) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }

    return res.status(200).json({ message: 'Encuesta restaurada con éxito' });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error al intentar restaurar la encuesta con id: ${id}`,
      });
  }
}

async function getSurveysBySurveyorAndDates(req, res) {
  const { surveyorId } = req.params;
  const { startDate, endDate } = req.query;

  try {
    const surveys = await surveyService.getSurveysBySurveyorAndDates(
      surveyorId,
      startDate,
      endDate,
    );
    if (surveys) {
      res.status(200).json(surveys);
    } else {
      res.status(404).json({ message: 'No hay encuestas en el rango de fechas indicado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Existe un problema con las fechas indicadas.', startDate, endDate });
  }
}

module.exports = {
  createSurvey,
  getSurveysByEmail,
  getAllSurveys,
  getSurveyById,
  deleteSurvey,
  updateSurvey,
  restoreSurvey,
  getSurveysBySurveyorAndDates,
};

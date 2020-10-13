-- INSERT INTO cat_eventos (id, descripcion, icono, createdAt, updatedAt) 
-- VALUES 
--   ( 'Seminarios', 'fa fa-university','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   ( 'Conferencias', 'fa fa-comment','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   ( 'Talleres', 'fa fa-code','2016-12-09 10:00:00', '2016-12-09 10:00:00');

-- INSERT INTO invitados (id, nombre, apellido, descripcion, urlimagen, createdAt, updatedAt) 
-- VALUES 
--   ( 'Blue', 'Fuentes','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado1.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   ( 'Donna', 'Solis','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado2.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   ( 'Fabian', 'Hernández','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado3.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   ( 'Musa', 'Mendoza','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado4.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   ( 'Mateo', 'Herrera','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado5.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   ( 'Fernanda', 'Gonzáles','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado6.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00');

INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Responsive Web Design', '2016-12-09', '10:00:00', '3', '1', 'taller_01');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Flexbox', '2016-12-09', '12:00:00', '3', '2', 'taller_02');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'HTML5 y CSS3', '2016-12-09', '14:00:00', '3', '3', 'taller_03');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Drupal', '2016-12-09', '17:00:00', '3', '4', 'taller_04');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'WordPress', '2016-12-09', '19:00:00', '3', '5', 'taller_05');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Como ser freelancer', '2016-12-09', '10:00:00', '2', '6', 'conf_01');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Tecnologías del Futuro', '2016-12-09', '17:00:00', '2', '1', 'conf_02');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Seguridad en la Web', '2016-12-09', '19:00:00', '2', '2', 'conf_03');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Diseño UI y UX para móviles', '2016-12-09', '10:00:00', '1', '6', 'sem_01');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'AngularJS', '2016-12-10', '10:00:00', '3', '1', 'taller_06');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'PHP y MySQL', '2016-12-10', '12:00:00', '3', '2', 'taller_07');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'JavaScript Avanzado', '2016-12-10', '14:00:00', '3', '3', 'taller_08');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'SEO en Google', '2016-12-10', '17:00:00', '3', '4', 'taller_09');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'De Photoshop a HTML5 y CSS3', '2016-12-10', '19:00:00', '3', '5', 'taller_10');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'PHP Intermedio y Avanzado', '2016-12-10', '21:00:00', '3', '6', 'taller_11');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Como crear una tienda online que venda millones en pocos días', '2016-12-10', '10:00:00', '2', '6', 'conf_04');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Los mejores lugares para encontrar trabajo', '2016-12-10', '17:00:00', '2', '1', 'conf_05');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Pasos para crear un negocio rentable ', '2016-12-10', '19:00:00', '2', '2', 'conf_06');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Aprende a Programar en una mañana', '2016-12-10', '10:00:00', '1', '3', 'sem_02');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Diseño UI y UX para móviles', '2016-12-10', '17:00:00', '1', '5', 'sem_03');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Laravel', '2016-12-11', '10:00:00', '3', '1', 'taller_12');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Crea tu propia API', '2016-12-11', '12:00:00', '3', '2', 'taller_13');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'JavaScript y jQuery', '2016-12-11', '14:00:00', '3', '3', 'taller_14');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Creando Plantillas para WordPress', '2016-12-11', '17:00:00', '3', '4', 'taller_15');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Tiendas Virtuales en Magento', '2016-12-11', '19:00:00', '3', '5', 'taller_16');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Como hacer Marketing en línea', '2016-12-11', '10:00:00', '2', '6', 'conf_07');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( '¿Con que lenguaje debo empezar?', '2016-12-11', '17:00:00', '2', '2', 'conf_08');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Frameworks y librerias Open Source', '2016-12-11', '19:00:00', '2', '3', 'conf_09');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Creando una App en Android en una mañana', '2016-12-11', '10:00:00', '1', '4', 'sem_04');
INSERT INTO eventos (nombre, fecha, hora, catevento_id, invitado_id, clave) VALUES ( 'Creando una App en iOS en una tarde', '2016-12-11', '17:00:00', '1', '1', 'sem_05');
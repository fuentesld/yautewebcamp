-- INSERT INTO `yautewebcamp`.`cat_eventos` (`id`, `descripcion`, `icono`, `createdAt`, `updatedAt`) 
-- VALUES 
--   (NULL, 'Seminarios', 'fa fa-university','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   (NULL, 'Conferencias', 'fa fa-comment','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   (NULL, 'Talleres', 'fa fa-code','2016-12-09 10:00:00', '2016-12-09 10:00:00');

-- INSERT INTO `yautewebcamp`.`invitados` (`id`, `nombre`, `apellido`, `descripcion`, `urlimagen`, `createdAt`, `updatedAt`) 
-- VALUES 
--   (NULL, 'Blue', 'Fuentes','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado1.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   (NULL, 'Donna', 'Solis','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado2.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   (NULL, 'Fabian', 'Hernández','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado3.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),
--   (NULL, 'Musa', 'Mendoza','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado4.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   (NULL, 'Mateo', 'Herrera','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado5.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00'),

--   (NULL, 'Fernanda', 'Gonzáles','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem, commodi ipsum maxime maiores repellendus sunt laudantium a tenetur sapiente distinctio odio eos mollitia corporis quidem id accusantium vel cumque?', 'invitado6.jpg','2016-12-09 10:00:00', '2016-12-09 10:00:00');

INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Responsive Web Design', '2016-12-09', '10:00:00', '3', '1', 'taller_01', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Flexbox', '2016-12-09', '12:00:00', '3', '2', 'taller_02', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'HTML5 y CSS3', '2016-12-09', '14:00:00', '3', '3', 'taller_03', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Drupal', '2016-12-09', '17:00:00', '3', '4', 'taller_04', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'WordPress', '2016-12-09', '19:00:00', '3', '5', 'taller_05', '2016-12-09 10:00:00', '2016-12-09 10:00:00');

INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Como ser freelancer', '2016-12-09', '10:00:00', '2', '6', 'conf_01', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Tecnologías del Futuro', '2016-12-09', '17:00:00', '2', '1', 'conf_02', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Seguridad en la Web', '2016-12-09', '19:00:00', '2', '2', 'conf_03', '2016-12-09 10:00:00', '2016-12-09 10:00:00');

INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Diseño UI y UX para móviles', '2016-12-09', '10:00:00', '1', '6', 'sem_01', '2016-12-09 10:00:00', '2016-12-09 10:00:00');



INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'AngularJS', '2016-12-10', '10:00:00', '3', '1', 'taller_06', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'PHP y MySQL', '2016-12-10', '12:00:00', '3', '2', 'taller_07', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'JavaScript Avanzado', '2016-12-10', '14:00:00', '3', '3', 'taller_08', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'SEO en Google', '2016-12-10', '17:00:00', '3', '4', 'taller_09', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'De Photoshop a HTML5 y CSS3', '2016-12-10', '19:00:00', '3', '5', 'taller_10', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'PHP Intermedio y Avanzado', '2016-12-10', '21:00:00', '3', '6', 'taller_11', '2016-12-09 10:00:00', '2016-12-09 10:00:00');


INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Como crear una tienda online que venda millones en pocos días', '2016-12-10', '10:00:00', '2', '6', 'conf_04', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Los mejores lugares para encontrar trabajo', '2016-12-10', '17:00:00', '2', '1', 'conf_05', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Pasos para crear un negocio rentable ', '2016-12-10', '19:00:00', '2', '2', 'conf_06', '2016-12-09 10:00:00', '2016-12-09 10:00:00');



INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Aprende a Programar en una mañana', '2016-12-10', '10:00:00', '1', '3', 'sem_02', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Diseño UI y UX para móviles', '2016-12-10', '17:00:00', '1', '5', 'sem_03', '2016-12-09 10:00:00', '2016-12-09 10:00:00');



INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Laravel', '2016-12-11', '10:00:00', '3', '1', 'taller_12', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Crea tu propia API', '2016-12-11', '12:00:00', '3', '2', 'taller_13', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'JavaScript y jQuery', '2016-12-11', '14:00:00', '3', '3', 'taller_14', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Creando Plantillas para WordPress', '2016-12-11', '17:00:00', '3', '4', 'taller_15', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Tiendas Virtuales en Magento', '2016-12-11', '19:00:00', '3', '5', 'taller_16', '2016-12-09 10:00:00', '2016-12-09 10:00:00');

INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Como hacer Marketing en línea', '2016-12-11', '10:00:00', '2', '6', 'conf_07', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, '¿Con que lenguaje debo empezar?', '2016-12-11', '17:00:00', '2', '2', 'conf_08', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Frameworks y librerias Open Source', '2016-12-11', '19:00:00', '2', '3', 'conf_09', '2016-12-09 10:00:00', '2016-12-09 10:00:00');


INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Creando una App en Android en una mañana', '2016-12-11', '10:00:00', '1', '4', 'sem_04', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
INSERT INTO `yautewebcamp`.`eventos` (`id`, `nombre`, `fecha`, `hora`, `catEventoId`, `invitadoId`, `clave`, `createdAt`,  `updatedAt`) VALUES (NULL, 'Creando una App en iOS en una tarde', '2016-12-11', '17:00:00', '1', '1', 'sem_05', '2016-12-09 10:00:00', '2016-12-09 10:00:00');
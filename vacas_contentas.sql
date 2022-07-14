SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `categorias` (
  `id` bigint(10) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'cremas'),
(2, 'especiales'),
(3, 'frutales');

CREATE TABLE `productos` (
  `id` bigint(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `categoria_id` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `categoria_id`) VALUES
(2, 'nombrePrueba2', 200, 'ice-2.png', 1);


ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_productos_categoria_id` (`categoria_id`);


ALTER TABLE `categorias`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `productos`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


ALTER TABLE `productos`
  ADD CONSTRAINT `fk_productos_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);
COMMIT;

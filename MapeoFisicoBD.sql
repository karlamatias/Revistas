CREATE USER 'RevistaUser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'R123';
GRANT ALL PRIVILEGES ON Revistas.* TO'RevistaUser'@'localhost';
FLUSH PRIVILEGES;

CREATE SCHEMA IF NOT EXISTS Revistas;

USE Revistas;

CREATE TABLE IF NOT EXISTS Usuario(
usuario VARCHAR(45) NOT NULL,
password VARCHAR(15) NOT NULL,
rol VARCHAR(45) NOT NULL,
PRIMARY KEY(usuario)
);

CREATE TABLE IF NOT EXISTS TarjetaCD(
numero INT(16) NOT NULL,
propietario VARCHAR(45) NOT NULL,
vigencia VARCHAR(5) NOT NULL,
CVV INT(3) NOT NULL, 
PRIMARY KEY(numero),
FOREIGN KEY(propietario) REFERENCES Usuario(usuario)

);

CREATE TABLE IF NOT EXISTS Perfil(
idPerfil INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(45) NOT NULL,
etiqueta VARCHAR(45) NOT NULL,
fechaNacimiento DATE NOT NULL,
usuarioPerfil VARCHAR(45) NOT NULL,
PRIMARY KEY(idPerfil),
FOREIGN KEY(usuarioPerfil) REFERENCES Usuario(usuario)
);


CREATE TABLE IF NOT EXISTS Revista(
nombre VARCHAR(45) NOT NULL,
etiqueta VARCHAR(45),
costo DECIMAL(5,2) NOT NULL,
fechaCreacion DATE NOT NULL,
categoria VARCHAR(45) NOT NULL,
autor VARCHAR(45) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
cantMegusta INT(20),
PRIMARY KEY(nombre),
FOREIGN KEY(autor) REFERENCES Usuario(usuario)
);

CREATE TABLE IF NOT EXISTS Comentario(
numeroComentario INT NOT NULL AUTO_INCREMENT,
comentario VARCHAR(200)  NOT NULL,
revista VARCHAR(45) NOT NULL,
usuario VARCHAR(45) NOT NULL,
PRIMARY KEY(numeroComentario),
FOREIGN KEY(revista) REFERENCES Revista(nombre),
FOREIGN KEY(usuario) REFERENCES Usuario(usuario)
);


CREATE TABLE IF NOT EXISTS Suscribe(
codigoSuscripcion INT NOT NULL AUTO_INCREMENT,
fechaSuscripcion DATE NOT NULL,
costoSuscripcion DECIMAL(5,2) NOT NULL,
tipoSuscripcion VARCHAR(45) NOT NULL,
revista VARCHAR(45) NOT NULL,
tarjeta INT(16) NOT NULL,
usuarioSuscriptor VARCHAR(45) NOT NULl,
PRIMARY KEY(codigoSuscripcion),
FOREIGN KEY(revista) REFERENCES Revista(nombre),
FOREIGN KEY(tarjeta) REFERENCES TarjetaCD(numero),
FOREIGN KEY(usuarioSuscriptor) REFERENCES Usuario(usuario)
);

CREATE TABLE IF NOT EXISTS Administrador(
usuario VARCHAR(45) NOT NULL,
password VARCHAR(15) NOT NULL,
rol VARCHAR(45) NOT NULL,
PRIMARY KEY(usuario)
);

CREATE TABLE IF NOT EXISTS Anuncio(
nombre VARCHAR(45) NOT NULL,
costo DECIMAL(5,2) NOT NULL,
dias INT(45) NOT NULL,
etiqueta VARCHAR(45) NOT NULL,
texto VARCHAR(45),
imagen LONGTEXT,
video LONGTEXT,
fecha DATE NOT NULL,
PRIMARY KEY(nombre)
);


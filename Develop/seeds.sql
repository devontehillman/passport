USE passport_demo;

CREATE TABLE IF NOT EXISTS users (
    id Integer NOT NULL AUTO_INCREMENT,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL,
    primary key(id)
);
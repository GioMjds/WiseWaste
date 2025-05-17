CREATE TABLE roles (
	role_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('resident', 'barangay_official') NOT NULL
);

CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    barangay_id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    address VARCHAR(200) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles (role_id)
);

CREATE TABLE waste_types (
	waste_type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT
);

CREATE TABLE service_requests (
	request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waste_type_id INT NOT NULL,
    requested_date DATE NOT NULL,
    status ENUM('pending', 'scheduled', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (waste_type_id) REFERENCES waste_types (waste_type_id)
);

CREATE TABLE pickups (
	pickup_id INT AUTO_INCREMENT PRIMARY KEY,
	request_id INT NOT NULL,
    scheduled_date DATE NOT NULL,
    route_id INT,
    status ENUM('scheduled', 'in_progress', 'done', 'missed') NOT NULL DEFAULT 'scheduled',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES service_requests (request_id),
    FOREIGN KEY (route_id) REFERENCES routes (route_id)
);

CREATE TABLE routes (
	route_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(255),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE route_assignments (
	assignment_id INT AUTO_INCREMENT PRIMARY KEY,
    route_id INT NOT NULL UNIQUE,
    pickup_id INT NOT NULL UNIQUE,
    sequence_no INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES routes (route_id),
    FOREIGN KEY (pickup_id) REFERENCES pickups (pickup_id)
);

CREATE TABLE complaints (
	complaint_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL,
	pickup_id INT, -- if related to a specific pickup
	description TEXT NOT NULL,
	status ENUM('open','in_review','resolved') NOT NULL DEFAULT 'open',
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (pickup_id) REFERENCES pickups(pickup_id)
);

CREATE TABLE notifications (
	notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE waste_logs (
	log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waste_type_id INT NOT NULL,
    quantity_kg DECIMAL(6, 2) NOT NULL,
    log_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (waste_type_id) REFERENCES waste_types (waste_type_id)
);
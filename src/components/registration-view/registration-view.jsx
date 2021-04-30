import axios from 'axios';
import React, { useState } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';

export function RegistrationView(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	const handleRegister = (e) => {
		e.preventDefault();
		axios
			.post('https://myflix-movies-app.herokuapp.com/users', {
				Username: username,
				Password: password,
				Email: email,
				Birthday: birthday,
			})
			.then((response) => {
				const data = response.data;
				console.log(data);
				window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Form>
			<Form.Group as={Row} controlId="formUsername">
				<Form.Label column sm="2">
					Username
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="formPassword">
				<Form.Label column sm="2">
					Password
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="formEmail">
				<Form.Label column sm="2">
					Email
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="formBirthday">
				<Form.Label column sm="2">
					Date of Birth
				</Form.Label>
				<Col sm="10">
					<Form.Control
						type="date"
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Button variant="danger" type="submit" onClick={handleRegister}>
				{' '}
				Register{' '}
			</Button>
		</Form>
	);
}

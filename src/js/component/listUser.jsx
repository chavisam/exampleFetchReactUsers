import React, { useEffect, useState } from "react";
import { User } from "./user.jsx";

export const ListUser = () => {
	const [user, setUser] = useState([]);
	const [gender, setGender] = useState(null);

	const changeGender = (data) => {
		setGender(data);
	};

	useEffect(() => {
		const url = gender
			? `https://randomuser.me/api/?gender=${gender}&results=5`
			: `https://randomuser.me/api/?results=5`;

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then((responseAsJson) => {
				// Do stuff with the JSONified response
				console.log(responseAsJson);
				setUser(responseAsJson.results);
			})
			.catch((error) => {
				console.log("Looks like there was a problem: \n", error);
			});
	}, [gender]);

	return (
		<div className="container">
			<h4>Listado de Usuarios:</h4>

			<select
				name="gender"
				id="gender"
				onChange={(e) => {
					changeGender(e.target.value);
				}}>
				<option value="male">MALE</option>
				<option value="female">FEMALE</option>
			</select>
			<div className="row">
				{user.map((user, index) => {
					return (
						<User
							key={index}
							name={user.name}
							phone={user.phone}
							picture={user.picture.large}
						/>
					);
				})}
			</div>
		</div>
	);
};

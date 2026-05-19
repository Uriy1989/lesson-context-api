import { use } from 'react';
import { AppContext } from '../../../../context';

export const UserPersonalInfo = () => {
	//{ name, age }
	const { name, age } = use(AppContext);
	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст:{age}</div>
		</div>
	);
};

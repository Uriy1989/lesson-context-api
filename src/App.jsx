import './App.css';
import styles from './styles.module.css';

import { Header, UserBlock } from './components';

const getUserFromServer = () => ({
	id: 'ee44',
	name: 'Yuriy',
	age: 37,
	email: 'trampampam@yandex.ru',
	phone: '75654654644',
});

function App() {
	const { name, age, email, phone } = getUserFromServer();

	return (
		<>
			<h3>Привет</h3>
			<div>
				<Header currentUser={name} />
				<hr />
				<UserBlock name={name} age={age} email={email} phone={phone} />
			</div>
		</>
	);
}

export default App;

/*Цель урока — познакомиться с React Context, узнать о его возможностях и научиться использовать в приложениях.

В данном уроке вы:

узнаете, что такое React Context и для чего он может быть полезен;
научитесь создавать Контекст, внедрять его в приложение и читать из него данные;
узнаете, как обновлять значение Контекста, чтобы обновились все компоненты, которые используют его данные;
разберетесь, в каких случаях стоит использовать React Context;
узнаете, что такое Flux;
познакомитесь с хуком useReducer();
познакомитесь с понятием State management и реализуете его на основе Context API. */

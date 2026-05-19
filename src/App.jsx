import './App.css';
import styles from './styles.module.css';

import { useState, useEffect } from 'react';

import { AppContext } from './context';
import { Header, UserBlock } from './components';
import { AppContextProvider } from './app-context';

const getUserFromServer = () => ({
	id: 'ee44',
	name: 'Yuriy',
	age: 37,
	email: 'trampampam@yandex.ru',
	phone: '+7565465464433',
});

const getAnotherUserFromServer = () => ({
	id: 'ee44',
	name: 'Vadim',
	age: 32,
	email: 'wewewew@yandex.ru',
	phone: '+7583405843950',
});

function App() {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		setUserData(getAnotherUserFromServer);
	};

	//const { name, age, email, phone } = getUserFromServer();
	//		<AppContext value={useData}>

	return (
		//<AppContextProvider
		<AppContext value={userData}>
			<h3>Привет</h3>
			<div>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}> Сменить пользователя</button>
			</div>
		</AppContext>
	);
}

export default App;

/*
	return (
		//<AppContextProvider
	
			themeValue={{ them: 'light' }}
			userValue={useData}
			appConfigValue={null}
		>
			<h3>Привет</h3>
			<div>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}> Сменить пользователя</button>
			</div>
		</AppContextProvider>
	);


			<h3>Привет</h3>
			<div>
				<Header currentUser={name} />
				<hr />
				<UserBlock name={name} age={age} email={email} phone={phone} />
			</div>


context API храним данные наверху, используем внизу */

//<UserBlock name={name} age={age} email={email} phone={phone} /> - 'это называется проброс пропсов  через несколько компонентов(через посредников) props drilling

/*Цель урока — познакомиться с React Context, узнать о его возможностях и научиться использовать в приложениях.

В данном уроке вы:

узнаете, что такое React Context и для чего он может быть полезен;
научитесь создавать Контекст, внедрять его в приложение и читать из него данные;
узнаете, как обновлять значение Контекста, чтобы обновились все компоненты, которые используют его данные;
разберетесь, в каких случаях стоит использовать React Context;
узнаете, что такое Flux;
познакомитесь с хуком useReducer();
познакомитесь с понятием State management и реализуете его на основе Context API.

<ThemeContext.Provider>
  ...
<ThemeContext.Provider>

новый вид
<ThemeContext>
  ...
<ThemeContext>

Также для получения данных контекста теперь можно использовать хук use().

*/

import './App.css';
import Feed from './components/body/feed/Feed';
import Sidebar from './components/body/sidebar/Sidebar';

import Header from './components/header/Header';
import Widgets from './components/body/widgets/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './components/body/feed/firebase';

function App() {
	const userState = useSelector(selectUser);
	const { user } = userState;
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;

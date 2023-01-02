import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/connectify-logo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../body/feed/firebase';
import { logout } from '../../features/userSlice';

const Header = () => {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<img src={logo} alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input placeholder='Search' type='text' />
				</div>
			</div>

			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
			</div>
		</div>
	);
};
export default Header;

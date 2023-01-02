import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import './sidebar.css';

const Sidebar = () => {
	const { user } = useSelector(selectUser);

	const recentItem = (topic) => {
		return (
			<div className='sidebar__recentItem'>
				<span className='sidebar__hash'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1666739651802-1d8456958a6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
					alt=''
				/>
				<Avatar className='sidebar__avatar' />
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>5,352</p>
				</div>

				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>3,452</p>
				</div>
			</div>
			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('developer')}
				{recentItem('design')}
				{recentItem('frontend')}
			</div>
		</div>
	);
};
export default Sidebar;

import './widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>

			<div className='widgets__articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>Connectify News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				'Why Everyone is Obsessed with ChatGPT',
				'Top news - 4.5m readers'
			)}
			{newsArticle(
				'ChatGPT Is not going to take your job away',
				'Top news - 3.5m readers'
			)}
			{newsArticle('Elon Musk', 'Top news - 3.2m readers')}
			{newsArticle('Tesla hits new highs', 'Top news - 500k readers')}
			{newsArticle('Is Redux too good?', 'Top news - 100k readers')}
			{newsArticle(
				'The Flat-Earth conspiracy is spreading around the world',
				'Top news - 50k readers'
			)}
		</div>
	);
};
export default Widgets;

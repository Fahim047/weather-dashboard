import FavoriteIcon from '../../assets/heart.svg';
export default function Favorite({
	showFavoriteListModal,
	setShowFavoriteListModal,
}) {
	const handleFavoriteList = () => {
		setShowFavoriteListModal(!showFavoriteListModal);
	};
	return (
		<div
			onClick={handleFavoriteList}
			className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
		>
			<img src={FavoriteIcon} alt="Favorite Icon" />
			<span>Favorite Locations</span>
		</div>
	);
}

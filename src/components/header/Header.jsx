import { useState } from 'react';
import Favorite from './Favorite';
import FavoriteListModal from './FavoriteListModal';
import Logo from './Logo';
import SearchBox from './SearchBox';

export default function Header() {
	const [showFavoriteListModal, setShowFavoriteListModal] = useState(false);
	return (
		<header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
			<nav className="container flex items-center justify-between py-6">
				<Logo />

				<div className="flex items-center gap-4 relative">
					<SearchBox />
					<Favorite
						showFavoriteListModal={showFavoriteListModal}
						setShowFavoriteListModal={setShowFavoriteListModal}
					/>
					{showFavoriteListModal && <FavoriteListModal />}
				</div>
			</nav>
		</header>
	);
}

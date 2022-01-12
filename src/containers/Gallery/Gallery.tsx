import { useEffect, useState } from 'react';
import { APOD } from '../../data/apod';
import DB from '../../db/db';
import './Gallery.scss';

const Gallery = () => {
	const [ items, setItems ] = useState<APOD[]>();

	useEffect(() => {
		setItems(DB.getSavedApods());
	}, []);

	return (
		<div className="Gallery">
			{items && items.map((x) => <img className="gallery-item" alt={x.title} src={x.url} key={x.url} />)}
		</div>
	);
};

export default Gallery;

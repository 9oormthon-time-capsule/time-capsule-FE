import React, { useEffect, useState } from 'react';
import {
	Star,
	StarsBackground,
} from '../../../styles/timecapsule/write/WritePage.style';

const getRandomPosition = () => {
	const x = Math.random() * 100;
	const y = Math.random() * 100;
	return { x, y };
};

const getRandomDuration = () => Math.random() * 2 + 1 + 's';
const getRandomDelay = () => Math.random() * 2 + 's';
const getRandomOpacity = () => Math.random() * 0.5 + 0.5;

export const StarsBackgroundWrapper = () => {
	const [stars, setStars] = useState([]);

	useEffect(() => {
		const savedStars = localStorage.getItem('starsPosition');
		if (savedStars) {
			setStars(JSON.parse(savedStars)); // 로컬 스토리지에 저장된 별 위치 불러오기
		} else {
			// 로컬 스토리지에 저장된 별 위치가 없다면 새로 생성
			const starsArr = [];
			for (let i = 0; i < 100; i++) {
				const { x, y } = getRandomPosition();
				const animationDuration = getRandomDuration();
				const animationDelay = getRandomDelay();
				const opacity = getRandomOpacity();

				starsArr.push({
					id: i,
					x,
					y,
					animationDuration,
					animationDelay,
					opacity,
				});
			}

			localStorage.setItem('starsPosition', JSON.stringify(starsArr)); // 새로 생성한 별 위치 저장
			setStars(starsArr);
		}
	}, []);

	return (
		<StarsBackground>
			{stars.map((star) => (
				<Star
					key={star.id}
					style={{
						top: `${star.y}vh`,
						left: `${star.x}vw`,
						animationDuration: star.animationDuration,
						animationDelay: star.animationDelay,
						opacity: star.opacity,
					}}
				/>
			))}
		</StarsBackground>
	);
};

import React from 'react';

import MyLink from 'components/MyLink/my-link';
import './podcast-episodes-list.scss';

const CoutElementsListView = ({ num }) => {
	return <div className="header-list">Episodes: {num}</div>;
};

const getTableCell = (text, path) => {
	return (
		<td>
			<MyLink to={path}>
				{text}
			</MyLink>
		</td>
	);
};

const PodcastEpisodesList = ({ episodes, url }) => {
	return (
		<div className="podcast-episodes-list">
			<CoutElementsListView num={episodes.length} />
			<table className="episodes-table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{episodes.map((e, k) => {
						return (
							<tr key={k}>
								{getTableCell(e.title, `${url}/episode/${e.id}`)}
								{getTableCell(e.pubDate, `${url}/episode/${e.id}`)}
								{getTableCell(e.duration, `${url}/episode/${e.id}`)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default PodcastEpisodesList;

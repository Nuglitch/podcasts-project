import React from 'react';

import MyLink from 'components/MyLink/my-link';
import './podcast-episodes-list.scss';

const CoutElementsListView = ({ num }) => {
	return <div className="header-list">Episodes: {num}</div>;
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
								<td>
									<MyLink to={`${url}/episode/${e.id}`}>
										{e.title}
									</MyLink>
								</td>
								<td>
									<MyLink to={`${url}/episode/${e.id}`}>
										{e.pubDate}
									</MyLink>
								</td>
								<td>
									<MyLink to={`${url}/episode/${e.id}`}>
										{e.duration}
									</MyLink>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default PodcastEpisodesList;

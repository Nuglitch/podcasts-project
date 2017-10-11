import React from 'react';
import PropTypes from 'prop-types';

import MyLink from 'components/MyLink/my-link';
import './podcast-episodes-list.scss';

const CoutElementsListView = ({ num }) => {
	return <div className="header-list">Episodes: {num}</div>;
};

CoutElementsListView.propTypes = {
	num: PropTypes.number.isRequired
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
								<td>{e.pubDate}</td>
								<td>{e.duration}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

PodcastEpisodesList.propTypes = {
	episodes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			pubDate: PropTypes.string,
			duration: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired,
	url: PropTypes.string.isRequired
};

export default PodcastEpisodesList;

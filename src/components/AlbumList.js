import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album';

class AlbumList extends Component {
	state = {
		albums: []
	};

	componentWillMount () {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
	}

	renderAlbums () {
		return this.state.albums.map((item, index) => {
			return <Album key={ index } item={ item } />;
		});
	}

	render () {
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	};
}

export default AlbumList;
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
	return <View style={ style.containerSection }>{ props.children }</View>;
};

const style = StyleSheet.create({
	containerSection: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
});

export default CardSection;
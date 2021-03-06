import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default function CardList({ items }) {

    const renderItem = ({ item: {id, author}}) => (
        <Card
            fullname={author}
            image={{
                uri: getImageFromId(id),
            }}
        />
    );

    return(
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
        }),

    ).isRequired,
};
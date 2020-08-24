import {
    ActivityIndicator,
    text,
    ViewPropTypes,
    SafeAreaView,

} from 'react-native';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default function Feed({ style }) {

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchTheImages = useCallback(async () => {
        try {
            const items = await fetchImages();
            setIsLoading(false);
            setItems(items);
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
        }
    });

    useEffect(() => {
       fetchTheImages()
    }, [fetchTheImages]);

    if (isLoading) {
        return <ActivityIndicator size='large'/>;
    }

    if (isError) {
        return <Text>Error...</Text>
    }

    return (
        <SafeAreaView style={style}>
            <CardList items={items}/>
        </SafeAreaView>
    );

}
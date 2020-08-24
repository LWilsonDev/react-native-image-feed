import { StyleSheet, View, Dimensions, ActivityIndicator, } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import Image from 'react-native-scalable-image';

import AuthorRow from './AuthorRow';

const Card = ({
    fullname,
    image,
    linkText = '',
    onPressLinkText
}) => {


    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    }


    return (
        <View>
            <AuthorRow
                fullname={fullname}
                linkText={linkText}
                onPressLinkText={onPressLinkText}
            />
            <View style={styles.container}>
                {isLoading && (
                    <ActivityIndicator
                        style={styles.loadingIndicator}
                        size={'large'}
                    />
                )}
                <Image
                    style={styles.image}

                    source={image}
                    onLoad={handleLoad}
                    resizeMode={"cover"}
                    height={400}
                />
            </View>

        </View>
    );

}

export default memo(Card, (prevState, nextState) => prevState.linkText !== nextState.linkText);
// Todo -> research memo. Not entirely sure if this is correct or actually doing anything

Card.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex:1,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    image: {
        aspectRatio: 1,
        flex:1,
    },
    loadingIndicator:{
        top:100,
        flex:1,

    }
});
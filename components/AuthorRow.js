import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

// components
import Avatar from './Avatar.js';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

export default function AuthorRow({
    fullname,
    linkText,
    onPressLinkText
}){
    return(
        <View style={styles.container}>
            <Avatar
                size={35}
                initials={getInitials(fullname)}
                backgroundColor={getAvatarColor(fullname)}
            />
            <Text style={styles.text} numberOfLines={1}>
                {fullname}
            </Text>
            {!!linkText && (
                <TouchableOpacity onPress={onPressLinkText}>
                    <Text numberOfLines={1}>{linkText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLink: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex:1,
        marginHorizontal:6,
    },
});

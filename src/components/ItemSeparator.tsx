import React, { useContext } from 'react'
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const {theme:{dividerColor}} = useContext(ThemeContext);
    return (
        <View style={{
            borderBottomWidth: 3,
            opacity: 0.2,
            marginVertical: 7,
            borderColor: dividerColor,
        }} />
    );

}

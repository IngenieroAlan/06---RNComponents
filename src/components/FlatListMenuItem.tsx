import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);
    /* const {colors} = useTheme(); */
    return (
        <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
});
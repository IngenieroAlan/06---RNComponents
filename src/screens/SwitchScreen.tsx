import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHungry, isHappy } = state;
    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        });
    }
    const { theme:{colors}} = useContext(ThemeContext);

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switches' />
            <View style={styles.switchRow}>
                <Text style={{fontSize:25,color:colors.text}}>is Active</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={{fontSize:25,color:colors.text}}>is Hungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={{fontSize:25,color:colors.text}}>is Happy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>


            <Text style={{fontSize:25,color:colors.text}}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:15,
    },
});

//React
import React from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
//Terceros
//Mios
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });
    const { isSubscribed } = form;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Text Inputs" />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            keyboardAppearance='light'
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='default'
                        />
                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Subscrito</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Ingrese su teléfono'
                            autoCorrect={false}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            keyboardAppearance='dark'
                        />
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(87, 87, 87,0.3)',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:15,
    },
    switchText: {
        fontSize: 25,
        color: 'black',
    }
});
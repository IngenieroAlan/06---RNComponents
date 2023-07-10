//React
import React, { useContext } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
//Terceros
//Mios
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    const { theme:{colors,currentTheme,dividerColor}} = useContext(ThemeContext);
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
                            style={{...stylesScreen.inputStyle,
                                borderColor:dividerColor,
                                color:colors.text,
                            }}
                            placeholder='Ingrese su nombre'
                            placeholderTextColor={colors.text}
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            keyboardAppearance={currentTheme}
                        />
                        <TextInput
                            style={{...stylesScreen.inputStyle,
                                color:colors.text,
                                borderColor:dividerColor,
                            }}
                            placeholder='Ingrese su email'
                            placeholderTextColor={colors.text}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance={currentTheme}
                        />
                        <View style={stylesScreen.switchRow}>
                            <Text style={{fontSize: 25,color:colors.text}}>Subscrito</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput
                            style={{...stylesScreen.inputStyle,
                                borderColor:dividerColor,
                                color:colors.text,
                            }}
                            placeholder='Ingrese su teléfono'
                            placeholderTextColor={colors.text}
                            autoCorrect={false}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                            keyboardAppearance={currentTheme}
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
});
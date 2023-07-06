//REACT
import React from 'react';
import { Button, View, Alert } from 'react-native';
//Terceros
import prompt from 'react-native-prompt-android';
//Nuestro
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Titulo', 'Mensaje de la alerta', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
    ], {
      cancelable: true,
      onDismiss: () => console.log('Dismissed'),
    });
  }
  const promptAlert = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: '',
        placeholder: 'Constraseña',
      }
    );
  }
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />
      <Button
        title='Mostrar alerta'
        onPress={showAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        title='Mostrar prompt'
        onPress={promptAlert}
      />
    </View>
  )
}

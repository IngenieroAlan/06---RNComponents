import React from 'react'
import { Button, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert('Titulo', 'Mensaje de la alerta', [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'destructive',
            },
            {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
          ],{
            cancelable: true,
            onDismiss: () => console.log('Dismissed'),
          });      
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts' />
            <Button
                title='Mostrar alerta'
                onPress={showAlert}
            />
        </View>
    )
}

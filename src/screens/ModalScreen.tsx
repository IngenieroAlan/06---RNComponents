import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />
            <Button
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
            />
            <Modal
                animationType='slide'
                visible={isVisible}
                transparent
            >
                {/* Background */}
                <View style={{
                    flex: 1,
                    /*height: '50%',
                    width: '80%',*/
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    

                }}>
                    {/* Contenido del modal */}
                    <View style={{
                        width: 300,
                        height: 300,
                        borderRadius: 20,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bottom: 150,
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 15,

                    }}>
                        <Text style={{fontSize:24,fontWeight:'bold',color:'black',marginBottom:10,}}>Modal</Text>
                        <Text style={{marginVertical:20,}}>Cuerpo del modal</Text>
                        <Button
                            title="salir"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

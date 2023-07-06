import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition}=useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                transform:[
                    {
                        translateY: position,
                    }
                ]
            }} />
            <Button
                title="fade In"
                onPress={()=>{
                    fadeIn();
                    startMovingPosition(-150,800);
                }}
            />
            <Button
                title="fade Out"
                onPress={fadeOut}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: "purple",
        width: 150,
        height: 150,
        borderRadius:20,
    }
});
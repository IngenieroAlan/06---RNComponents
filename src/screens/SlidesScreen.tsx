//React native 
import React, { useContext, useRef } from 'react'
import { Animated, Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//Terceros
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';
//Mios

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn, fadeOut } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    const isVisible = useRef(false)
    const navigation = useNavigation();
    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',

            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{...styles.title, color:colors.primary}}>{item.title}</Text>
                <Text style={{fontSize:18, color:colors.text}}>{item.desc}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.background,
                paddingTop: 50,
            }}
        >
            <Carousel
                /* ref={(c) => { this._carousel = c; }} */
                data={items}
                renderItem={({ item }) =>
                    renderItem(item)
                }
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (index === items.length - 1) {
                        isVisible.current = true;
                        fadeIn(500);
                    } else {
                        isVisible.current = false;
                        fadeOut(500);
                    }
                }}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.primary,
                    }}
                />

                <Animated.View style={{ opacity }}>
                    <TouchableOpacity style={{...styles.btnStyle,backgroundColor:colors.primary}}
                        activeOpacity={0.8}
                        onPress={() => {
                            if (isVisible.current) {
                                navigation.navigate('HomeScreen' as never)
                            }
                        }
                        }
                    >
                        <Text style={{...styles.btnText, color:colors.text}}>Entrar</Text>
                        <Icon
                            name='chevron-forward-outline'
                            color={colors.text}
                            size={30}
                        />

                    </TouchableOpacity>
                </Animated.View>


            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "bold",
    },
    btnStyle: {
        flexDirection: 'row',
        width: 135,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 25,
        bottom: 2,
    }
});

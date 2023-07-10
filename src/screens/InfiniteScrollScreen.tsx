import React, { useContext, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])
    const { theme: { colors } } = useContext(ThemeContext);
    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    }
    const renderItem = (item: number) => {
        return (
            <FadeInImage style={{
                width: '100%',
                height: 400,
            }} uri={`https://picsum.photos/id/${item}/1920/1080`} />
        );
    }
    /* <Image
        source={{uri:`https://picsum.photos/id/${item}/500/400`}}
        style={{width: '100%', height: 400,}}
    /> */
    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle
                            title="Infinite Scroll"
                        />
                    </View>

                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <ActivityIndicator size={30} color={colors.primary} />
                    </View>)}
            />
        </View>
    )
}
import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const PullToRefreshScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<String>();
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Refreshing');
            setRefreshing(false);
            setData("Hola mundo");
        }, 1500);
    }
    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.notification}
                    colors={[colors.primary]}
                    tintColor={colors.text}
                /* style={{ backgroundColor: "#5856D6" }}
                tintColor="white" */
                /* title='Refreshing...'
                titleColor="white" */

                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle
                    title='Pull to refresh'
                />
                {
                    data && <Text>{data}</Text>
                }


            </View>
        </ScrollView>
    )
}

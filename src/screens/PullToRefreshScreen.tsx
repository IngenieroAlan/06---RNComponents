import React, { useState } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const PullToRefreshScreen = () => {
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
                    progressBackgroundColor="white"
                    colors={['red', 'green', 'yellow']}
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

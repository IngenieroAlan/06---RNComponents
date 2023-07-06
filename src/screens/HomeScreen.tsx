import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItem } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';




export const HomeScreen = () => {
  
  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 5,
        opacity: 0.4,
        marginVertical: 8,
      }} />
    );
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItem}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title='Opciones de Menú'/>}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  )
}

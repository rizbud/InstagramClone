import React from 'react'
import {
  FlatList,
  Image,
  View,
  Text
} from 'react-native'

import { responsiveWidth } from '../services/responsive'

import styles from './styles/stories'

const Stories = (props) => {
  const { data } = props

  const renderStories = ({ item, index }) => (
    <View style={[
        styles.story,
        index !== 0 && {
          marginLeft: responsiveWidth(3)
        }
      ]}>
      <Image
        style={styles.avatar}
        resizeMode="cover"
        source={{ uri: item?.avatar }} 
      />
      <Text>{item?.username}</Text>
    </View>
  )

  return (
    <FlatList
      data={data}
      keyExtractor={(_item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderStories}
      style={styles.stories}
      contentContainerStyle={styles.scrollContainer}
    />
  )
}

export default Stories
import React, { useEffect, useState } from 'react'
import {
  RefreshControl,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getStories, likePost } from '../global/actions'

import Stories from '../components/stories'
import Posts from '../components/post'

import styles from './styles/home'
import Images from '../images'
import Icon from 'react-native-vector-icons/Feather'
import { responsiveWidth } from '../services/responsive'
import Toast from 'react-native-simple-toast'

const { width } = Dimensions.get('window')

const Home = (props) => {
  const stories = useSelector(state => state.stories)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)
  
  useEffect(() => {
    refresh()
  }, [])

  useEffect(() => {
    (!stories.loading && !posts.loading) && setRefreshing(false)
    if(stories.error || posts.error) {
      Toast.show('Tidak dapat memperbarui kabar berita.')
    }
  }, [stories.loading, posts.loading])

  const refresh = () => {
    setRefreshing(true)
    dispatch(getStories())
    dispatch(getPosts())
  }

  const onLike = (index) => {
    const data = {
      liked: !posts.data[index].liked
    }
    likePost(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Image source={Images.logo} />
        </View>
        <Icon name="heart" size={25} style={{ marginRight: responsiveWidth(5) }} />
        <Icon name="message-circle" size={25} />
      </View>
      <FlatList
        data={posts.data}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} onLayout={refresh} />}
        keyExtractor={(_item, index) => index.toString()}
        ListHeaderComponent={<Stories data={stories.data} />}
        renderItem={({ item, index }) => (
          <Posts
            item={item}
            onLike={() => onLike(index)}
          />
        )}
        contentContainerStyle={styles.scrollContainer}
      />
    </SafeAreaView>
  )
}
export default Home
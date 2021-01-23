import React from 'react'
import {
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  Text
} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/id'

import styles from './styles/posts'

const { width } = Dimensions.get('window')

const Posts = (props) => {
  const { item } = props

  dayjs.extend(relativeTime)

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: item?.avatar }}
        />
        <Text style={styles.username}>{item?.username}</Text>
        <Feather name="more-vertical" size={20} />
      </View>
      <Image
        style={styles.image}
        source={{ uri: item?.photos[0] }}
        resizeMode="stretch"
      />
      <View style={styles.footer}>
        <View style={styles.interaction}>
          <TouchableOpacity style={styles.icon} activeOpacity={0.9} onPress={props.onLike}>
            <IonIcons name={item?.liked ? 'heart' : 'heart-outline'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} activeOpacity={0.9} onPress={props.onComment}>
            <IonIcons name="chatbubble-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} activeOpacity={0.9} onPress={props.onSend}>
            <Feather name="send" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.save} activeOpacity={0.9} onPress={props.onBookmark}>
            <Feather name="bookmark" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: 'bold' }}>{item?.likes} suka</Text>
        <Text style={{ fontWeight:'bold' }}>{item?.username} <Text style={{ fontWeight: 'normal' }}>{item?.caption}</Text></Text>
        {item?.comments?.all > 0 && (
          <>
            {item?.comments?.all > 1 && <Text style={{ color: 'gray' }}>Lihat semua {item?.comments?.all} komentar</Text>}
            <Text style={{ fontWeight:'bold' }}>{item?.comments?.username} <Text style={{ fontWeight: 'normal' }}>{item?.comments?.comment}</Text></Text>
          </>
        )}
        <Text style={{ color: 'gray' }}>{dayjs(new Date(item?.uploadTime)).locale('id').fromNow()}</Text>
      </View>
    </View>
  )
}

export default Posts
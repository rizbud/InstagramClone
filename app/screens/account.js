import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../services/responsive'

import { getPosts } from '../global/actions'

import Images from './../images'

import styles from './styles/account'

const Account = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const [showHighlight, setShowHighlight] = useState(true)
  const [tab, setTab] = useState(1)

  useEffect(() => dispatch(getPosts()), [])

  const renderPost = ({ item }) => (
    <Image source={{ uri: item?.photos[0] }} style={styles.image} resizeMode='cover' />
  )

  const renderEmpty = () => (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: responsiveHeight(7),
      paddingHorizontal: responsiveWidth(25)
    }}>
      <Image
        source={Images.tag}
        style={{
          width: responsiveWidth(23),
          height: responsiveWidth(23),
          marginBottom: responsiveHeight(1)
        }}
      />
      <Text
      style={{
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: responsiveHeight(1)
      }}>
        Foto dan Video tentang Anda
      </Text>
      <Text style={{ textAlign: 'center', color: 'gray' }}>
        Ketika orang menandai Anda dalam foto dan video, mereka akan muncul di sini.
      </Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.username}>rizb.ud</Text>
          <Icon name='chevron-down' size={23} />
        </View>
        <View style={styles.headerRight}>
          <Icon name='plus' size={30} style={{ marginRight: 20 }} />
          <Icon name='menu' size={30} />
        </View>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.accountInfo}>
          <View style={styles.head}>
            <Image source={Images.avatar} style={styles.avatar} />
            <View style={styles.info}>
              <View style={styles.wrapper}>
                <Text style={styles.infoLabelNum}>3</Text>
                <Text style={styles.infoLabel}>Postingan</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.infoLabelNum}>210</Text>
                <Text style={styles.infoLabel}>Pengikut</Text>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.infoLabelNum}>900</Text>
                <Text style={styles.infoLabel}>Mengikuti</Text>
              </View>
            </View>
          </View>

          {/* Profile Info */}
          <Text style={styles.name}>Rizki Budi Prasetyo</Text>
          {/* <Text style={styles.bussiness}>Tokoh Publik</Text> */}
          <Text style={{ color: '#000' }}>
            {'Hello guys\nThis is just static profile.'}
          </Text>
          <Text style={styles.site}>github.com/rizbud</Text>

          <TouchableOpacity style={styles.btnEdit}>
            <Text style={styles.name}>Edit Profil</Text>
          </TouchableOpacity>

          {/* Highlight Story */}
          <TouchableOpacity
          onPress={() => setShowHighlight(!showHighlight)}
          activeOpacity={0.9}
          style={{ marginBottom: responsiveHeight(2) }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', flex: 1 }}>Sorotan Cerita</Text>
              <Icon name={showHighlight ? 'chevron-up' : 'chevron-down'} size={20} />
            </View>
            {showHighlight && <Text>Simpan cerita favorit di profil Anda</Text>}
          </TouchableOpacity>
          {showHighlight && (
            <View style={styles.highlight}>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.round}>
                  <Icon name='plus' size={25} />
                </View>
                <Text style={{ textAlign: 'center' }}>Baru</Text>
              </View>
            </View>
          )}
        </View>

        {/* Posts */}
        <View style={styles.row}>
          <TouchableOpacity
          onPress={() => setTab(1)}
          activeOpacity={0.9}
          style={tab === 1 ? styles.tabActive : styles.tab}>
            <Ionicons name={tab === 1 ? 'grid' : 'grid-outline'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => setTab(2)}
          activeOpacity={0.9}
          style={tab === 2 ? styles.tabActive : styles.tab}>
            <Ionicons name={tab === 2 ? 'person' : 'person-outline'} size={25} />
          </TouchableOpacity>
        </View>
        {tab === 1 && (
          <FlatList
            data={posts.data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            key={3}
            renderItem={renderPost}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={{
              flex: 1,
              paddingVertical: responsiveHeight(0.3)
            }}
          />
        )}

        {tab === 2 && (
          <FlatList
            data={[]}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            key={3}
            renderItem={renderPost}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={{
              flex: 1,
              paddingVertical: responsiveHeight(0.3)
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Account
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from '../global/actions'


const Home = (props) => {
  const stories = useSelector(state => state.stories)
  const { loading } = stories
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getStories())
  }, [])

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {loading ? <ActivityIndicator color="black" /> : <Text>Hello World</Text>}
    </SafeAreaView>
  )
}
export default Home
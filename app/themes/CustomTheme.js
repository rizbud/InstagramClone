import { Dimensions } from 'react-native'
import margin from './custom/margin'
import padding from './custom/padding'

const { width, height } = Dimensions.get('window')

export default {
  // width
  "w-full": { width },

  // height
  "h-full": { height },
  
  margin,
  padding
}
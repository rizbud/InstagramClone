import { StyleSheet } from 'react-native'
import globalStyles from '../../themes/globalStyles'

import { responsiveWidth, responsiveHeight } from '../../services/responsive'

export default StyleSheet.create({
  stories: {
    paddingBottom: responsiveHeight(1.5),
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: responsiveHeight(1.5)
  },
  scrollContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: responsiveWidth(3)
  },
  story: {
    alignItems: 'center'
  },
  avatar: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'center'
  }
})
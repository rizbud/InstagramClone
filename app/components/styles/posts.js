import { StyleSheet } from 'react-native'
import globalStyles from '../../themes/globalStyles'

import { responsiveWidth, responsiveHeight } from '../../services/responsive'

export default StyleSheet.create({
  post: {
    marginBottom: responsiveHeight(3)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(3),
    alignItems: 'center',
    paddingBottom: responsiveHeight(1.5),
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  avatar: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: 999,
    marginRight: '3%'
  },
  username: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveWidth(80)
  },
  footer: {
    marginHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  interaction: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: responsiveWidth(2)
  },
  save: {
    alignItems: 'flex-end',
    flex: 1,
    alignSelf: 'flex-end'
  }
})
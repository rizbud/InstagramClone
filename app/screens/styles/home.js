import { connect } from '../../themes/OsmiProvider'
import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveHeight } from '../../services/responsive'
import globalStyles from '../../themes/globalStyles'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    ...globalStyles.shadow,
    backgroundColor: '#fff',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    flexDirection: 'row'
  },
  scrollContainer: {
    paddingTop: responsiveHeight(2)
  }
})

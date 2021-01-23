import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveHeight } from '../../services/responsive'
import globalStyles from '../../themes/globalStyles'

export default StyleSheet.create({
  container: {
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
  headerLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  accountInfo: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(3),
    flex: 1,
    marginBottom: responsiveHeight(1)
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2)
  },
  avatar: {
    width: responsiveWidth(22.5),
    height: responsiveWidth(22.5),
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(5)
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoLabelNum: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoLabel: {
    fontSize: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bussiness: {
    color: '#808080'
  },
  site: {
    color: '#0000ff'
  },
  btnEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#808080',
    paddingVertical: responsiveHeight(0.7),
    marginVertical: responsiveHeight(2)
  },
  highlight: {
    flexDirection: 'row',
    flex: 1
  },
  round: {
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    padding: responsiveWidth(3),
    marginBottom: '5%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    paddingVertical: responsiveWidth(3),
    paddingBottom: responsiveWidth(4),
    borderBottomWidth: 0.5,
    borderColor: '#808080',
    flex: 1,
    alignItems: 'center'
  },
  tabActive: {
    paddingVertical: responsiveWidth(3),
    paddingBottom: responsiveWidth(4),
    borderBottomWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center'
  },
  image: {
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    height: responsiveWidth(100/3)
  },
})
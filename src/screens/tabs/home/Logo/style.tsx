import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    marginVertical: Platform.OS === 'ios' ? 0 : 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  containerText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.white,
  },
  containerText1: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.white,
    fontFamily: 'Montserrat',
  },
  sectionBox: {
    marginTop: 20,
    marginLeft: 30,
  },
  sectionBoxText: {
    fontWeight: '600',
    fontSize: 24,
    color: COLORS.textColor1,
    fontFamily: 'Montserrat',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -50,
    marginVertical: 25,
  },
  row: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.grey,
  },
  sectionBoxView: {
    width: 70,
    height: 28,
    backgroundColor: COLORS.buttonColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  sectionBoxView1: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 14,
  },
  sectionBoxView2: {
    width: 70,
    height: 28,
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  sectionBoxView12: {
    color: COLORS.textColor,
    fontWeight: '500',
    fontSize: 14,
  },
  sectionBoxs: {
    flexDirection: 'row',
    marginLeft: 15,
    marginHorizontal: 10,
  },
  sectionBox12: {
    marginHorizontal: 25,
    marginTop: 40,
  },
  invertor: {
    height: 90,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Platform.OS === 'ios' ? 5 : 5,
    flex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  invertorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'ios' ? 20 : 20,
    marginTop: 30,
  },
  invertorText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.white,
    fontFamily: 'Montserrat',
  },
  invertorText1: {
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'Montserrat',
  },
  invertorBox1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: Platform.OS === 'ios' ? 20 : 20,
  },
  invertorBox01: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'ios' ? 20 : 20,
  },
  invertorlow: {
    height: 90,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 25,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  invertorlowe: {
    flex: 1,
    height: 96,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  invertorText12: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.textColor,
    marginBottom: 5,
    fontFamily: 'Montserrat',
  },
  invertorText123: {
    fontWeight: '500',
    fontSize: 12,
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  invertordefult: {
    width: '48%',
    height: 90,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  invertorlowView: {
    height: 90,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionContainer: {
    marginLeft: 20,
    marginTop: 30,
  },
  sectionContainerText: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  sectionContainerBox: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 20,
    flexWrap: 'wrap',
    marginVertical: 30,
  },
  sectionContainerBoxText: {
    fontWeight: '600',
    fontSize: 12,
    color: COLORS.grey,
    fontFamily: 'Montserrat',
  },
  flexBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  datePicker: {
    width: 125,
  },
  listWrapper: {
    flexGrow: 0,
  },
  separator: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  rowWrapper: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },

  buttonWrapper: {
    height: 50,
    width: 100,
    backgroundColor: colors.liqidRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },

  buttonText: {
    color: colors.white,
  },
});

import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 10,
  },

  listHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 10,
    marginTop: 50,
  },

  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

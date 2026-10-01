import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.black700,
    backgroundColor: theme.colors.gray700,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.white200,
  },
});

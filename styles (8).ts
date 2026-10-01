import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black900,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -31, // o formulário fica metade sobre o cabeçalho
    paddingHorizontal: 24,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

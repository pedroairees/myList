import { TextInput, type TextInputProps } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Input({ style, ...rest }: TextInputProps) {
  return (
    <TextInput
      style={[styles.container, style]}
      placeholderTextColor={theme.colors.gray300}
      {...rest}
    />
  );
}

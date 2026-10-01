import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import PlusSvg from '../../assets/plus.svg';
import { styles } from './styles';

export function Button({ style, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel="Adicionar"
      {...rest}
    >
      <PlusSvg />
    </TouchableOpacity>
  );
}

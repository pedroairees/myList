import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LogoSvg from '../../assets/logo.svg';
import { styles } from './styles';

export function Header() {
  const { top } = useSafeAreaInsets();

  return (
    // No Figma a logo fica a 70px do topo, sendo 46px da barra de status
    <View style={[styles.container, { paddingTop: top + 24 }]}>
      <LogoSvg />
    </View>
  );
}

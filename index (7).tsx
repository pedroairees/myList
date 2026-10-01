import { View } from 'react-native';

import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <Input placeholder="Adicione algo a sua lista" />
        <Button />
      </View>

      <View style={styles.info}>
        <Counter label="Criadas" value={5} color={theme.colors.ciano} />
        <Counter label="Concluídas" value={2} color={theme.colors.blue500} />
      </View>
    </View>
  );
}

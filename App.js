import react, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Saldo from './components/saldo';

const App = () => {
  const [saldo, setSaldo] = useState(0);

  const [valor, setValor] = useState(0);

  return (
    <View style={styles.container}>
      <Saldo Valor={saldo} />

      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="0.00"
        keyboardType="numeric"
      />

      <Button
        title="Adicionar saldo"
        onPress={() => {
          setSaldo(saldo + Number(valor));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20
  },

  input: {
    color:'white',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  }
});

export default App;

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CommonHeader = ({ onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Text style={styles.backText}>←</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Retirar Dinero</Text>
  </View>
);

const RetiroPantalla = ({ navigation }) => {
  const [monto, setMonto] = useState('');
  const [cuentabancaria, setCuentabancaria] = useState('');

  return (
    <View style={styles.container}>
      <CommonHeader title="Withdraw" onBack={() => navigation.goBack()} />
      
      <View style={styles.content}>
        {/* Ingresar Monto */}
        <View style={styles.amountContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={styles.amountInput}
            value={monto}
            onChangeText={setMonto}
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor="#999999"
          />
        </View>

        {/* Bank Account Selector */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>A cuenta bancaria</Text>
          <TouchableOpacity 
            style={styles.bankSelector}
            onPress={() => {
              // Abrir selector de cuenta bancaria
              console.log('Select bank account');
            }}
          >
            <Text style={styles.bankSelectorText}>
              {cuentabancaria || 'Selecciona Cuenta Bancaria'}
            </Text>
            <Text>→</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[styles.button, (!monto || !cuentabancaria) && styles.buttonDisabled]}
          disabled={!monto || !cuentabancaria}
          onPress={() => {
            // Lógica para retirar dinero
            console.log('Withdrawing money...');
          }}
        >
          <Text style={styles.buttonText}>Retirar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 20,
    color: '#0052FF',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 40,
  },
  content: {
    padding: 24,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  currencySymbol: {
    fontSize: 40,
    color: '#000000',
    marginRight: 8,
  },
  amountInput: {
    fontSize: 40,
    color: '#000000',
    minWidth: 150,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 8,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#0052FF',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bankSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 12,
  },
  bankSelectorText: {
    fontSize: 16,
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
    color: '#000000',
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
  },
  methodCardSelected: {
    backgroundColor: '#E6EFFF',
  },
  methodIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  methodTitle: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
});

export default RetiroPantalla;
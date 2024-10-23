import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PantallaRegistrarse = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [tipoCuenta, settipoCuenta] = useState('Ahorro')
  const [saldo, setSaldo] = useState('')
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const handleGoBack = () => {
    navigation.goBack(); 
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleGoBack}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Regístrate</Text>
      </View>

      {/* Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Número de Teléfono */}
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {/* Tipo de Cuenta */}
      <Picker
        selectedValue={tipoCuenta}
        style={styles.input}
        onValueChange={(itemValue) => settipoCuenta(itemValue)}
      >
        <Picker.Item label="Ahorro" value="Ahorro" />
        <Picker.Item label="Corriente" value="Corriente" />
      </Picker>


      {/* Contraseña */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Contraseña"
          secureTextEntry={!mostrarContrasena}
          value={contrasena}
          onChangeText={setContrasena}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setMostrarContrasena(!mostrarContrasena)}
        >
          <Text style={styles.eyeText}>{mostrarContrasena ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Saldo */}
      <TextInput
      style={styles.input}
      placeholder="Saldo"
      value={saldo}
      onChangeText={setSaldo}
      />


      {/* Botón de Registro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  
  backButton: {
    padding: 8,
  },
   backText: {
    fontSize: 20,
    color: '#0052FF',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  eyeButton: {
    marginLeft: -35,
    paddingRight: 15,
  },
  eyeText: {
    fontSize: 18,
  },
  button: {
    height: 50,
    backgroundColor: '#0052FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
   headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 40,
  }
});

export default PantallaRegistrarse;

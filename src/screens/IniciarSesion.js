import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const IniciarSesion = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Encabezado con botón de regreso */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Iniciar Sesión</Text>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        {/* Campo de teléfono */}
        <Text style={styles.label}>Teléfono</Text>
        <View style={styles.phoneInputContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/20' }}
            style={styles.flagIcon}
          />
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="Ingrese su teléfono"
            placeholderTextColor="#999999"
          />
        </View>

        {/* Campo de contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#999999"
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Text>{showPassword ? '👁️' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Recuperar contraseña*/}
        <TouchableOpacity 
          onPress={() => navigation.navigate('RecoverPassword')}
          style={styles.recoverContainer}
        >
          <Text style={styles.recoverText}>Recuperar Contraseña</Text>
        </TouchableOpacity>

        {/* Boton iniciar sesión */}
        <TouchableOpacity 
          style={[
            styles.signInButton,
            (!phoneNumber || !password) && styles.signInButtonDisabled
          ]}
          onPress={() => {
            if (phoneNumber && password) {
              // Aquí iría la lógica de inicio de sesión
              console.log('Sign in pressed');
            }
          }}
          disabled={!phoneNumber || !password}
        >
          <Text style={styles.signInButtonText}>Iniciar Sesión</Text>
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
  form: {
    padding: 24,
  },
  label: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 24,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000000',
  },
  eyeIcon: {
    padding: 8,
  },
  recoverContainer: {
    marginBottom: 24,
  },
  recoverText: {
    color: '#0052FF',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#0052FF',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IniciarSesion;
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardScreen = ({ navigation }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const mainActions = [
    { icon: 'send', label: 'Enviar', onPress: () => navigation.navigate('Envio') },
    { icon: 'bank-transfer-in', label: 'Depositar', onPress: () => navigation.navigate('Deposito') },
    { icon: 'bank-transfer-out', label: 'Retirar', onPress: () => navigation.navigate('Retiro') },
    { icon: 'history', label: 'Movimientos', onPress: () => navigation.navigate('Historial') },
  ];

  const additionalServices = [
    { icon: 'cash-plus', label: 'Solicitar Préstamo', onPress: () => navigation.navigate('Prestamo') },
    { icon: 'file-chart', label: 'Reporte Financiero', onPress: () => navigation.navigate('Reporte') }, //
  ];

  const ActionButton = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#0052FF" />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado con perfil */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hola, Usuario</Text>
        <TouchableOpacity 
          onPress={() => setShowLogoutModal(true)}
          style={styles.profileButton}
        >
          <Icon name="logout" size={32} color="#0052FF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Tarjeta de saldo */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo disponible</Text>
          <Text style={styles.balanceAmount}>$0</Text>
        </View>

        {/* Acciones principales */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Acciones rápidas</Text>
          <View style={styles.actionsGrid}>
            {mainActions.map((action, index) => (
              <ActionButton key={index} {...action} />
            ))}
          </View>
        </View>

        {/* Servicios adicionales */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Servicios financieros</Text>
          <View style={styles.servicesGrid}>
            {additionalServices.map((service, index) => (
              <ActionButton key={index} {...service} />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Modal de cierre de sesión */}
      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¿Cerrar sesión?</Text>
            <Text style={styles.modalText}>
              ¿Estás seguro que deseas cerrar tu sesión?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.logoutButton]}
                onPress={() => {
                  setShowLogoutModal(false);
                  navigation.replace('Welcome');
                }}
              >
                <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  balanceCard: {
    backgroundColor: '#0052FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  balanceLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  accountNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  actionsContainer: {
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  servicesContainer: {
    marginBottom: 24,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  actionButton: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '80%',
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#F5F6FA',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  cancelButtonText: {
    color: '#333333',
    fontWeight: '600',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default DashboardScreen;
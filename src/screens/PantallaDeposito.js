import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CommonHeader = ({ onBack }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Depositar Dinero</Text>
    </View>
);

const DepositoPantalla = ({ navigation }) => {
    const [monto, setMonto] = useState('');
    const [nota, setNota] = useState('');

    return (
        <View style={styles.container}>
            <CommonHeader title="Depositar Dinero" onBack={() => navigation.goBack()} />

            <View style={styles.content}>
                {/* Amount Input */}
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

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nota</Text>
                    <TextInput
                        style={styles.input}
                        value={nota}
                        onChangeText={setNota}
                        placeholder="Deje un breve mensaje"
                        placeholderTextColor="#999999"
                    />
                </View>

                <TouchableOpacity
                    style={[styles.button, (!monto) && styles.buttonDisabled]}
                    disabled={!monto}
                    onPress={() => {
                        // Lógica para depositar dinero
                        console.log('Depositing money...');
                    }}
                >
                    <Text style={styles.buttonText}>Depositar Dinero</Text>
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
});

export default DepositoPantalla;
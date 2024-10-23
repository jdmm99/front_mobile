import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, TouchableOpacity   
 } from 'react-native';

const PantallaHistorial = ({navigation}) => {
    const [movimientos, setMovimientos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Historial de movimientos</Text>
                <TouchableOpacity style={styles.botonRetroceder} onPress={() => navigation.goBack()}>
                    <Text style={styles.botonTexto}>Retroceder</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F0F0F0', 
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    botonRetroceder: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
    },
    scrollView: {
        backgroundColor: '#0052FF',
        borderRadius: 20,
        padding: 16,
        margin: 20
        
    }

});

export default PantallaHistorial;
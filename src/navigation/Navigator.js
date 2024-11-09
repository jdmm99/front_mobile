import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesion from '../screens/IniciarSesion';
import PantallaBienvenida from '../screens/PantallaBienvenida';
import PantallaRegistrarse from '../screens/PantallaRegistrarse';
import Dashboard from '../screens/Dashboard';
import PantallaDeposito from '../screens/PantallaDeposito';
import PantallaEnvio from '../screens/PantallaEnvio';
import PantallaHistorial from '../screens/PantallaHistorial';
import PantallaPrestamo from '../screens/PantallaPrestamo';
import RetiroPantalla from '../screens/RetiroPantalla';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla de Bienvenida" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Pantalla de Bienvenida" component={PantallaBienvenida} />
        <Stack.Screen name="Registrarse" component={PantallaRegistrarse} />
        <Stack.Screen name="Iniciar Sesión" component={IniciarSesion} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Deposito" component={PantallaDeposito} />
        <Stack.Screen name="Envio" component={PantallaEnvio} />
        <Stack.Screen name="Historial" component={PantallaHistorial} />
        <Stack.Screen name="Prestamo" component={PantallaPrestamo} />
        <Stack.Screen name="Retiro" component={RetiroPantalla} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Navigation(){
  return(

      <AppNavigator />

  )
};

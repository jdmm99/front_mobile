import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesion from '../screens/IniciarSesion';
import PantallaBienvenida from '../screens/PantallaBienvenida';
import Registrarse from '../screens/Registrarse';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Pantalla de Inicio" component={PantallaBienvenida} />
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen name="Iniciar Sesión" component={IniciarSesion} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesion from '../screens/IniciarSesion';
import PantallaBienvenida from '../screens/PantallaBienvenida';
import PantallaRegistrarse from '../screens/PantallaRegistrarse';

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
        <Stack.Screen name="Pantalla de Bienvenida" component={PantallaBienvenida} />
        <Stack.Screen name="Registrarse" component={PantallaRegistrarse} />
        <Stack.Screen name="Iniciar Sesión" component={IniciarSesion} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
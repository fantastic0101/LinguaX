import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Colors from './constants/colors';
import CustomButton from './components/CustomButton';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/Auth/SignInScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import WelcomeStep1 from './screens/GetStarted/WelcomeStep1';
import WelcomeStep2 from './screens/GetStarted/WelcomeStep2';
import WelcomeStep3 from './screens/GetStarted/WelcomeStep3';
import WelcomeStep4 from './screens/GetStarted/WelcomeStep4';
import AwesomeScreen from './screens/GetStarted/AwesomeScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import WelcomeUserScreen from './screens/Auth/WelcomeUserScreen';
import DashboardScreen from './screens/Main/DashboardScreen';
import ExploreScreen from './screens/Main/ExploreScreen';
import LearningScreen from './screens/Main/LearningScreen';
import LeaderboardScreen from './screens/Main/LeaderboardScreen';
import CustomProgressBar from './components/CustomProgressBar';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

async function loadFonts() {
  try {
    await Font.loadAsync({
      'Lato': require('./assets/fonts/Lato-Black.ttf'),
    });
  } catch (error) {
    console.log('Error loading fonts:', error);
    throw new Error('Fonts could not be loaded');
  }
}

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Awesome" component={AwesomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Learning" component={LearningScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WelcomeUser" component={WelcomeUserScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{
            title: 'Create your profile',
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lato',
              fontWeight: 900,
              fontSize: 20,
              lineHeight: 28,
              color: Colors.fontColor,
            },
            headerTintColor: Colors.tintColor,
            headerBackImage: () => (
              <Image source={require('./assets/close.png')} />
            )
          }} />
          <Stack.Screen name="WelcomeStep1" component={WelcomeStep1} options={{
            headerTitle: () => <CustomProgressBar percent='6%' />,
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleContainerStyle: {
              width: '100%',
            },
            headerTintColor: Colors.tintColor,
          }} />
          <Stack.Screen name="WelcomeStep2" component={WelcomeStep2} options={{
            headerTitle: () => <CustomProgressBar percent='25%' />,
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleContainerStyle: {
              width: '100%',
            },
            headerTintColor: Colors.tintColor,
          }} />
          <Stack.Screen name="WelcomeStep3" component={WelcomeStep3} options={{
            headerTitle: () => <CustomProgressBar percent='50%' />,
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleContainerStyle: {
              width: '100%',
            },
            headerTintColor: Colors.tintColor,
          }} />
          <Stack.Screen name="WelcomeStep4" component={WelcomeStep4} options={{
            headerTitle: () => <CustomProgressBar percent='75%' />,
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleContainerStyle: {
              width: '100%',
            },
            headerTintColor: Colors.tintColor,
          }} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
            title: '',
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lato',
              fontWeight: 900,
              fontSize: 20,
              lineHeight: 28,
              color: Colors.fontColor,
            },
            headerTintColor: Colors.tintColor,
          }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{
            title: 'Sign in',
            headerStyle: {
              backgroundColor: Colors.bgColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Lato',
              fontWeight: 900,
              fontSize: 20,
              lineHeight: 28,
              color: Colors.fontColor,
            },
            headerTintColor: Colors.tintColor,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function HomeScreen({ navigation }) {
  const handleStartedPress = () => {
    navigation.navigate('Welcome');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const screenHeight = Dimensions.get('window').height; // Get the full height of the screen
  const calculatedHeight = screenHeight - 172;

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, { height: calculatedHeight }]}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Image source={require('./assets/title.png')} style={styles.title} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Get started" onPress={handleStartedPress} textColor={Colors.whiteColor} bgColor={Colors.primaryColor} borderColor={Colors.primaryDarkColor} marginBottom={12} />
        <CustomButton title="I already have an account" onPress={handleSignInPress} textColor={Colors.primaryColor} bgColor={Colors.whiteColor} borderColor={Colors.borderColor} borderWidth={1.5} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 100,
    height: 108,
    marginBottom: 24,
  },
  title: {
    width: 140,
    height: 38.5,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 16,
    position: 'absolute',
    bottom: 32,
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
  },
});

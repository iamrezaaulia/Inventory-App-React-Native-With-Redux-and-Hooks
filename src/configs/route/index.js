import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { 
    Home, 
    DetailProduct, 
    CreateProduct, 
    UpdateProduct, 
    Categories, 
    DetailCategory,
    Login,
    Register,
    SplashScreen 
} from '../../container/pages'


const HomeStack = createStackNavigator (
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        },
        DetailProduct,
        CreateProduct,
        UpdateProduct,
    },
    {
        initialRouteName: 'Home'
    }
)

const CategoriesStack = createStackNavigator (
    {
        Categories: {
            screen: Categories,
            navigationOptions: {
                header: null,
            },
        },
        DetailCategory,
    },
    {
        initialRouteName: 'Categories'
    }
)

const AuthStack = createStackNavigator (
    {
        Login,
        Register
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
)

const Router = createSwitchNavigator (
    {
        HomeStack,
        CategoriesStack,
        AuthStack,
        SplashScreen
    },
    {
        initialRouteName: 'SplashScreen'
    }
);
  
export default createAppContainer(Router);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps124800Navigator from '../features/Maps124800/navigator';
import UserProfile124796Navigator from '../features/UserProfile124796/navigator';
import Maps124756Navigator from '../features/Maps124756/navigator';
import Add-Item124755Navigator from '../features/Add-Item124755/navigator';
import Maps124751Navigator from '../features/Maps124751/navigator';
import UserProfile124747Navigator from '../features/UserProfile124747/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps124800: { screen: Maps124800Navigator },
UserProfile124796: { screen: UserProfile124796Navigator },
Maps124756: { screen: Maps124756Navigator },
Add-Item124755: { screen: Add-Item124755Navigator },
Maps124751: { screen: Maps124751Navigator },
UserProfile124747: { screen: UserProfile124747Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

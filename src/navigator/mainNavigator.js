import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps167181Navigator from '../features/Maps167181/navigator';
import Add-Item167180Navigator from '../features/Add-Item167180/navigator';
import Maps167176Navigator from '../features/Maps167176/navigator';
import UserProfile167172Navigator from '../features/UserProfile167172/navigator';
import BlankScreen1167148Navigator from '../features/BlankScreen1167148/navigator';
import BlankScreen0167144Navigator from '../features/BlankScreen0167144/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps167181: { screen: Maps167181Navigator },
Add-Item167180: { screen: Add-Item167180Navigator },
Maps167176: { screen: Maps167176Navigator },
UserProfile167172: { screen: UserProfile167172Navigator },
BlankScreen1167148: { screen: BlankScreen1167148Navigator },
BlankScreen0167144: { screen: BlankScreen0167144Navigator },

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

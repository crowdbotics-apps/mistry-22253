import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile167172Navigator from '../features/UserProfile167172/navigator';
import BlankScreen1167148Navigator from '../features/BlankScreen1167148/navigator';
import BlankScreen0167144Navigator from '../features/BlankScreen0167144/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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

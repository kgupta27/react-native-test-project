/**
 * 
 * Routing  
 * @author Shashank Srivastava
 * 
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import List from './src/Containers/List';
import Home from './src/Containers/Home';
import Detail from './src/Containers/Detail';
// import HomeComponent from './src/Components/HomeComponent'
// import ListComponent from './src/Components/ListComponent'



const MyApp = createStackNavigator({
  Home: {
    screen: Home,
  },
  List: {
    screen: List
  },
  Detail: {
    screen: Detail
  }
});



export default createAppContainer(MyApp);
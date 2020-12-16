import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';
import ResultDetail from './src/components/ResultDetail';

const navigator =createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigation:{
    title: "Business Search"
  }
});

export default createAppContainer(navigator);

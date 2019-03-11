/**
 * 
 * Container for home component  
 * @author Shashank Srivastava
 * 
 */


import { connect } from 'react-redux';
import HomeComponent from '../Components/HomeComponent';
import {forceUpdate} from '../Services/action';
import { toggleUiState } from '../Services/action';

const mapStateToProps = (state) => ({
  forceUpdateReply: state.home.forceUpdateReply,
  uiState: state.home.uiTest,
});

const mapDispatchToProps = (dispatch) => ({
   getforceUpdate: (data) => dispatch(forceUpdate(data)),
   toggleUiState : () => dispatch(toggleUiState()),
});

const Home = connect(
mapStateToProps,
mapDispatchToProps
)(HomeComponent);

export default Home;
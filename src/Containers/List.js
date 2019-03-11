/**
 * 
 * Container for home component  
 * @author Shashank Srivastava
 * 
 */


import { connect } from 'react-redux';
import ListComponent from '../Components/ListComponent';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default List;
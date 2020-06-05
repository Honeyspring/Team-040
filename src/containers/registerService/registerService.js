import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import registrationThunk from '../../middlewares/registrationThunk';
import Register from '../../Components/Register/Register';

/**
 * MAP DISPATCH TO PROPS
 * @func mapDispatchToProps
 * @param {function} dispatch
 * @description Map dispatch to props set props on props component who is connected him and received actions should come from component to dispatch
 * @returns object<Function>
 */
const mapDispatchToProps = (dispatch) => ({
  registerUser: bindActionCreators(registrationThunk, dispatch) // pass this function in props Register component. she takes two params: data of user registration and even. see registationThunk file.
});

/**
 * MAP STATE TO PROPS
 * @func mapStateToProps
 * @param {object} state
 * @description Map state to props pass necessary props to component who is connected him
 * @returns object
 */
const mapStateToProps = (state) => ({
  // Pass this properties in props Register component. see reducers/store.js for more details on this properties...
  loading: state.registerReducer.loading,
  error: state.registerReducer.error, 
  success: state.registerReducer.success
});

/**
 * REGISTER SERVICE
 * @const RegisterService
 * @description Connect component to redux and pass all props
 */
const RegisterService = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterService;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import registrationThunk from '../../middlewares/registrationThunk';

/**
 * MAP DISPATCH TO PROPS
 * @func mapDispatchToProps
 * @param {function} dispatch
 * @description Map dispatch to props set props on props component who is connected him and received actions should come from component to dispatch
 * @returns object<Function>
 */
const mapDispatchToProps = (dispatch) => ({
  registerUser: bindActionCreators(registrationThunk, dispatch)
});

/**
 * MAP STATE TO PROPS
 * @func mapStateToProps
 * @param {object} state
 * @description Map state to props pass necessary props to component who is connected him
 */
const mapStateToProps = (state) => ({
  loading: state.registerReducer.loading,
  error: state.registerReducer.error,
  success: state.registerReducer.success
});
/**
 * REGISTER SERVICE
 * @const RegisterService
 * @description Connect component to redux 
 */
const RegisterService = connect(mapStateToProps, mapDispatchToProps)(/* Pass Register component here without tag */) 

export default RegisterService;
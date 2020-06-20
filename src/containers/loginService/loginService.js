import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import loginThunk from '../../middlewares/loginThunk';
import SignIn from '../../Components/SignIn/SignIn';

/**
 * MAP DISPATCH TO PROPS
 * @func mapDispatchToProps
 * @param {function} dispatch
 * @description Map dispatch to props set props on props component that is connected  and received actions should come from component to dispatch
 * @returns object<Function>
 */
const mapDispatchToProps = (dispatch) => ({
  loginUser: bindActionCreators(loginThunk, dispatch)
});

/**
 * MAP STATE TO PROPS
 * @func mapStateToProps
 * @param {object} state
 * @description Map state to props pass necessary props to component which is connected to it
 * @returns object
 */
const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading,
  error: state.loginReducer.error
});

/**
 * LOGIN SERVICE
 * @const LoginService
 * @description Connect component to redux and pass all props
 */
const LoginService = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default LoginService;
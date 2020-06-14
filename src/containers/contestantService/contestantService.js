import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import contestantThunk from '../../middlewares/contestantThunk';
import { getContestantsByCategory, getContestantsByParty } from '../../actions/contestantAction';
import Contestants from '../../Components/Contestant/Contestants';

/**
 * MAP DISPATCH TO PROPS
 * @func mapDispatchToProps
 * @param {function} dispatch
 * @description Map dispatch to props set props on props component who is connected him and received actions should come from component to dispatch
 * @returns object<Function> 
 */
const mapDispatchToProps = (dispatch) => ({
  getContestants: bindActionCreators(contestantThunk, dispatch),
  getContestantsByParty: bindActionCreators(getContestantsByParty, dispatch),
  getContestantsByCategory: bindActionCreators(getContestantsByCategory, dispatch)
});

/**
 * MAP STATE TO PROPS
 * @func mapStateToProps
 * @param {object} state
 * @description Map state to props pass necessary props to component who is connected him
 * @returns object 
 */
const mapStateToProps = (state) => ({
  contestants: state.contestantReducer.contestants,
  contestantsByParty: state.contestantReducer.contestantsByParty,
  contestantsByCategory: state.contestantReducer.contestantsByCategory,
  error: state.contestantReducer.error,
  loading: state.contestantReducer.loading
});

/**
 * CONTESTANT SERVICE
 * @const ContestantService
 * @description Connect component to redux and pass all props
 */
const ContestantService = connect(mapStateToProps, mapDispatchToProps)(Contestants);

export default ContestantService;
import { connect } from 'react-redux';
import { getBackgroundProp } from '../store/domains/UI/selectors';
import { setBackground } from '../store/domains/UI/actions';
import BackgroundToggle from '../components/BackgroundToggle';

const mapStateToProps = state => ({
  background: getBackgroundProp(state)
});
const mapDispatchToProps = {
  setBackground
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundToggle);

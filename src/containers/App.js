import { connect } from 'react-redux';
import { getTheme } from '../store/domains/UI/selectors';
import App from '../App';

const mapStateToProps = state => ({
  theme: getTheme(state)
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

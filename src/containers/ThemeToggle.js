import { connect } from 'react-redux';
import { toggleTheme } from '../store/domains/UI/actions';
import { getThemeProp } from '../store/domains/UI/selectors';
import ThemeToggle from '../components/ThemeToggle';

const mapStateToProps = state => ({
  theme: getThemeProp(state)
});
const mapDispatchToProps = {
  toggleTheme
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggle);

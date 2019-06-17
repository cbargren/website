import { connect } from 'react-redux';

import { getBackground } from '../store/domains/UI/selectors';
import AppLayout from '../components/AppLayout';

const mapStateToProps = state => ({
  Background: getBackground(state)
});
export default connect(mapStateToProps)(AppLayout);

import { toggleTheme, setBackground } from './actions';

const init = () => ({
  background: 'stripes',
  theme: 'dark'
});

export default (state = init(), action) => {
  switch (action.type) {
    case toggleTheme:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    case setBackground:
      return {
        ...state,
        background: action.background
      };
    default:
      return state;
  }
};

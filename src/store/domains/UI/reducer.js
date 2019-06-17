import { toggleTheme } from './actions';

const init = () => ({
  theme: 'dark'
});

export default (state = init(), action) => {
  switch (action.type) {
    case toggleTheme:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    default:
      return state;
  }
};

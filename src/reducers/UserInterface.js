import interfaceActions from "../actions/UserInterface";

const initialState = {
  count: 999
};

const UserInterface = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case interfaceActions.types.ADD_COUNT_COMPLETE: {
      const newCount = state.count + 1;
      nextState = {
        ...state,
        count: newCount
      };
      return Object.assign({}, state, nextState);
    }
    default:
      return state;
  }
};

export default UserInterface;

import { createAction } from "redux-actions";

const ADD_COUNT = "ADD_COUNT";
const ADD_COUNT_COMPLETE = "ADD_COUNT_COMPLETE";

const addCount = createAction(ADD_COUNT);
const addCountComplete = createAction(ADD_COUNT_COMPLETE);

export default {
  types: {
    ADD_COUNT,
    ADD_COUNT_COMPLETE
  },
  creators: {
    addCount,
    addCountComplete
  }
};

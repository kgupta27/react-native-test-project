
import { FORCE_UPDATE, TOGGLE_UI_STATE } from './constant';

const initialState = {
  forceUpdateReply:'',
    uiTest: false
};

export default function MyProfileReducer(state = initialState, action) {
  console.warn("Action: ",action);
  switch (action.type) {
      case FORCE_UPDATE:
      console.warn("in Reducer: ",action);
      return {
        ...state,
        forceUpdateReply: action.check,
      }

      case TOGGLE_UI_STATE:
      return {
        ...state,
        uiTest: !state.uiTest
      }

    default:
      return state;
  }
};

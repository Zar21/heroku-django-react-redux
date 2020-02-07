import { algorithmConstants } from '../constants';

export function algorithm(state = {}, action) {
    switch (action.type) {
        case algorithmConstants.GET_ALGORITHM_REQUEST:
            return { getting: true};
        case algorithmConstants.GET_ALGORITHM_SUCCESS:
            return { 
                getting: false,
                code: action.value
            };
        case algorithmConstants.GET_ALGORITHM_FAILURE:
            return {};
        case algorithmConstants.LIST_ALGORITHM_REQUEST:
            return { getting: true};
        case algorithmConstants.LIST_ALGORITHM_SUCCESS:
            return { 
                getting: false,
                codeList: action.value
            };
        case algorithmConstants.LIST_ALGORITHM_FAILURE:
            return {};
      default:
        return state
    }
  }
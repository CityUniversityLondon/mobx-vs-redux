export function counterReducer(state = {count: 0}, action) {
    switch (action.type) {
        case COUNTER_ADD_ONE:
            return {count: state.count + 1};
    }

    return state;
}

export const COUNTER_ADD_ONE = "COUNTER_ADD_ONE";
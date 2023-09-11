export const Types = {
    LOADING: 'loading',
    DISABLED: 'disabled',
    SUCCESS: 'success',
    ERROR: 'error',
    EMAIL: 'email',
    ON_SUCCESS: 'onSuccess',
    ON_ERROR: 'onError',
};

export const INITIAL_STATE = {
    email: '',
    disabled: true,
    feedBack: '',
    loading: false,
    success: false,
    error: false
};

export const ForgotReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case Types.LOADING:
            return {
                ...state,
                loading: payload
            };
        case Types.DISABLED:
            return {
                ...state,
                disabled: payload
            };
        case Types.SUCCESS:
            return {
                ...state,
                success: payload
            };
        case Types.ERROR:
            return {
                ...state,
                error: payload
            };
        case Types.EMAIL:
            return {
                ...state,
                email: payload
            };
        case Types.ON_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                disabled: true,
                feedBack: payload
            };
        case Types.ON_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                feedBack: payload
            }
        default:
            return state
    }

}

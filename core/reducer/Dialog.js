export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";

export const showDialog = ({ message = "", code = -1 }) => ({
    type: SHOW_DIALOG,
    message,
    code,
});
export const hideDialog = () => ({ type: HIDE_DIALOG });

const InitialState = {
    isOpen: false,
    code: -1,
    message: "",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case SHOW_DIALOG:
            return {
                ...state,
                isOpen: true,
                code: Number(action.code),
                message: action.message,
            };
        case HIDE_DIALOG:
            return InitialState;
        default:
            return state;
    }
};

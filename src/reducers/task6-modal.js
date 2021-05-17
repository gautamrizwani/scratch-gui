const OPEN_MODAL = 'scratch-gui/task6modals/OPEN_MODAL';
const CLOSE_MODAL = 'scratch-gui/task6modals/CLOSE_MODAL';

const MODAL_TASK6 = 'task6Modal';

const initialState = {
    [MODAL_TASK6]: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case OPEN_MODAL:
        return Object.assign({}, state, {
            [action.modal]: true
        });
    case CLOSE_MODAL:
        return Object.assign({}, state, {
            [action.modal]: false
        });
    default:
        return state;
    }
};
const openModal = function (modal) {
    return {
        type: OPEN_MODAL,
        modal: modal
    };
};
const closeModal = function (modal) {
    return {
        type: CLOSE_MODAL,
        modal: modal
    };
};
const openTask6Modal = function () {
    return openModal(MODAL_TASK6);
};
const closeTask6Modal = function () {
    return closeModal(MODAL_TASK6);
};

export {
    reducer as default,
    initialState as task6InitialState,
    openTask6Modal,
    closeTask6Modal
};

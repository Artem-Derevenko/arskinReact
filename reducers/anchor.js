const initialState = { 
    active_anchor: ""
};

export default function reducer(state = initialState, action) { 

    switch (action.type) {

        case 'CLICK_ANCHOR':

            return Object.assign({}, state, {
                active_anchor: action.anchor
            })

        default: return state
    }
}
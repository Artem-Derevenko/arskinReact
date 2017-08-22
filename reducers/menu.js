const initialState = { 
    page: "home"
};

export default function reducer(state = initialState, action) { 

    switch (action.type) {

        case 'ACTIVE_MENU':

            return Object.assign({}, state, {
                page: action.pageLink
            })

        default: return state
    }
}
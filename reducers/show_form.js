const initialState = { 
    view_form: false
};

export default function reducer(state = initialState, action) { 

    switch (action.type) {

        case 'SHOW_FORM':

            return Object.assign({}, state, {
                view_form: true
            })

        case 'HIDE_FORM':

            return Object.assign({}, state, {
                view_form: false
            })

        default: return state
    }
}
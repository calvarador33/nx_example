import { tabAction } from "../actions/tab.action";
import { TabPrincipal } from "../interfaces/tabs.model";

export function TabReducer(state: TabPrincipal[] = [], action: tabAction) {    
    switch (action.type) {
        case 'addTab':
            if (state.findIndex(e => e.header === action.payload.header) !== -1) {
                return state;
            }
            return [
                ...state,
                action.payload
            ]
        case 'removeTab':
            return state.filter(element => element.header !== state[action.payload].header)
        default:            
            return state;
    }
}
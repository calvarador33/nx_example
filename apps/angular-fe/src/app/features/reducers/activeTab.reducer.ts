import { activeTabAction } from "../actions/activeTab.action";

export function ActiveTabReducer(state: number = 0, action: activeTabAction) {    
    switch (action.type) {
        case 'updateActiveTab':            
            return action.payload
        default:            
            return state;
    }
}
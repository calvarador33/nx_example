import { activeTabAction } from "../actions/activeTab.action";
import { ActiveTab } from "../interfaces/activeTab.model";

export function ActiveTabReducer(state: ActiveTab[] = [], action: activeTabAction) {    
    switch (action.type) {
        case 'updateActiveTab':            
            return action.payload
        default:            
            return state;
    }
}
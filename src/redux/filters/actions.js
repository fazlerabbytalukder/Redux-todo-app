import { STSTUSCHANGED, COLORCHANGED } from './actionTypes';

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}
export const statusChanged = (status) => {
    return {
        type: STSTUSCHANGED,
        payload:  status,
    }
}
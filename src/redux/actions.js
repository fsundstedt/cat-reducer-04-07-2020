import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from './actionTypes';

export const nap = () => {
    return {
        type: ACTION_NAP
    }
}

export const eat = () => {
    return {
        type: ACTION_EAT
    }
}

export const PLAY = () => {
    return {
        type: ACTION_PLAY
    }
}
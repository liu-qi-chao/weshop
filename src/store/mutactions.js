import {SAVE_INDEXLISTS} from './mutations_types'

export default {
    [SAVE_INDEXLISTS](state,data){
        state.IndexList = data
    }
}
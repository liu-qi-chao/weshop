import { 
    SAVE_INDEXLISTS, 
    SAVE_SEARCHLIST,
    SAVE_NAVLIST,
    SAVE_CATELIST, 
} from './mutations_types'

export default {
    [SAVE_INDEXLISTS](state,data){
        state.IndexList = data
    },
    [SAVE_SEARCHLIST](state,data){
        state.SearchList = data
    },
    [SAVE_NAVLIST](state,data){
        state.CateNavDatas = data
    },
    [SAVE_CATELIST](state,data){
        state.CateListDatas = data
    }

}
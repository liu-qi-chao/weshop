import {
    SAVE_INDEXLISTS,
    SAVE_SEARCHLIST,
    SAVE_NAVLIST,
    SAVE_CATELIST,
    SAVE_BUYNAVLIST,
    SAVE_BUYCONTENTLIST
} from './mutations_types'

import {
    getIndexList,
    getSearchDatas,
    getNavListDatas,
    getCateListDatas,
    getBuyNavDatas,
    getBuyContentDatas
 } from '../api'

export default {
    async getIndexLists({commit}){
        let result = await getIndexList()
        commit(SAVE_INDEXLISTS,result)
    },
    async getSearchDatas({commit}){
        let result = await getSearchDatas()
        commit(SAVE_SEARCHLIST,result)
    },
    async getNavListDatas({commit}){
        let result = await getNavListDatas()
        commit(SAVE_NAVLIST,result)
    },
    async getCateListDatas({commit}){
        let result = await getCateListDatas()
        commit(SAVE_CATELIST,result)
    },
    async getBuyNavDatas({commit}){
        let result = await getBuyNavDatas()
        commit(SAVE_BUYNAVLIST,result.data.navList)
    },
    async getBuyContentDatas({commit}){
        let result = await getBuyContentDatas()
        commit(SAVE_BUYCONTENTLIST,result.data)
    }
}
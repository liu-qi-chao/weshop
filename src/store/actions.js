import {SAVE_INDEXLISTS} from './mutations_types'

import {getIndexList} from '../api'

export default {
    async getIndexLists({commit}){
        let result = await getIndexList()
        commit(SAVE_INDEXLISTS,result)
    }
}
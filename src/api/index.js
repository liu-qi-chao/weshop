import ajax from './ajax'

export const getIndexList = () => ajax({
    url:'/indexList'
})
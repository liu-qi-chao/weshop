import ajax from './ajax'


//获取首页首页数据
export const getIndexList = () => ajax({
    url:'/indexList'
})
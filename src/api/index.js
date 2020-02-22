import ajax from './ajax'


//获取首页首页数据
export const getIndexList = () => ajax({
    url:'/indexList'
})

//获取搜索数据
export const getSearchDatas = () => ajax({
    method: 'post',
    url: '/searchList'
})

//获取分类导航数据
export const getNavListDatas = () => ajax({
    url: '/cateNavDatas'
})

//获取分类列表数据
export const getCateListDatas = () => ajax({
    url: '/cateLists'
})
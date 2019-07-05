const QQ_MAP_KEY = '56JBZ-HXH6P-OR7DG-VF2DH-NZVPS-OFFRO'

// 获取位置
export const geocoder = (latitude,longitude,success = () =>{},fail = () => {}) =>{
    return wx.request({
        url:'https://apis.map.qq.com/ws/geocoder/v1/',
        data:{
            location:`${latitude},${longitude}`,
            key:QQ_MAP_KEY,
            get_pio:0
        },
        success,
        fail
    })
}
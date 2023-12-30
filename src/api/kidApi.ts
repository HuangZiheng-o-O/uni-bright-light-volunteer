import {request} from "@/utils/request";

//传volunteerId
//返回child的list
const getKidListApi = (data: any, token: string = '') => {
    return request('volunteer/kid/list', 'GET', data, JSON.stringify({token: token}));
}

//传taskId，childId
//返回answerSheetDetail的list
const getAnswerSheetDetailApi = (data: any, token: string = '') => {
    return request('volunteer/kid/answerSheetDetail', 'GET', data, JSON.stringify({token: token}));
}

//传childId
//返回child
const getKidDetailApi = (data: any, token: string = '') => {
    return request('volunteer/kid/detail', 'GET', data, JSON.stringify({token: token}));
}

export {getKidListApi, getAnswerSheetDetailApi, getKidDetailApi}

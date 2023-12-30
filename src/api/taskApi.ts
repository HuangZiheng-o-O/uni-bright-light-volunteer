import {request} from "@/utils/request";
import type {MarkingResult, Report, ItemDonationInfo} from "@/ts/types";

//传volunteerId
//返回AnswerSheet list
const distributeAnswerSheetApi = (data: any, token: string = '') => {
    return request('volunteer/task/distributeAnswerSheet', 'GET', data, JSON.stringify({SaToken: token}));
}
//传volunteerId
//返回MarkingResult
const getAnswerSheetListApi = (data: any, token: string = '') => {
    return request('volunteer/task/answerSheetList', 'GET', data, JSON.stringify({SaToken: token}));
}
//传MarkingResult类 批改
const correctionResultApi = (data: MarkingResult, token: string = '') => {
    return request('volunteer/task/correctionResult', 'POST', data, JSON.stringify({SaToken: token}));
}
//传volunteerId
const distributeLoveProjectListApi = (data: any, token: string = '') => {
    return request('volunteer/task/distributeLoveProjectList', 'GET', data, JSON.stringify({SaToken: token}));
}

//传volunteerId
const loveProjectListApi = (data: any, token: string = '') => {
    return request('volunteer/task/loveProjectList', 'GET', data, JSON.stringify({SaToken: token}));
}

//传itemDonationInfo类对象 审核
const itemApprovalApi = (data: ItemDonationInfo, token: string = '') => {
    return request('volunteer/task/itemApproval', 'POST', data, JSON.stringify({SaToken: token}));
}

//传Report类对象 提交
const stageReportApi = (data: Report, token: string = '') => {
    return request('volunteer/task/stageReport', 'POST', data, JSON.stringify({SaToken: token}));
}


export {distributeAnswerSheetApi, getAnswerSheetListApi, correctionResultApi,
    distributeLoveProjectListApi, loveProjectListApi, itemApprovalApi, stageReportApi}

import {request} from "@/utils/request";
import type {Volunteer} from "@/ts/types";

//传volunteerId
//返回volunteerCredit
const getCreditApi = (data: any, token: string = '') => {
    return request('volunteer/personal/credit', 'GET', data, JSON.stringify({SaToken: token}));
}

//传volunteerId
//返回RankVolunteerDto
const getCreditListApi = (data: any, token: string = '') => {
    return request('volunteer/personal/creditList', 'GET', data, JSON.stringify({SaToken: token}));
}

//传volunteerId
//返回Volunteer

const getInformationApi = (data: any, token: string = '') => {
    return request('volunteer/personal/getInformation', 'GET', data, JSON.stringify({SaToken: token}));
}

//传Volunteer类对象
const messageChangeApi = (data: Volunteer, token: string = '') => {
    return request('volunteer/personal/messageChange', 'POST', data, JSON.stringify({SaToken: token}));
}


export {getCreditApi, getCreditListApi, getInformationApi, messageChangeApi}

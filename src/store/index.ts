import {defineStore} from "pinia";

export default defineStore('main',{
    state: ()=>{
        return{
            account: 'aaa',
            childId: '',
            volunteerId: '',
            activeTab: 0,
            token: ''
        }
    },
    getters:{

    },
    actions: {
        setActiveTab(tab: number){
            this.activeTab = tab;
        }
    }
})

import {createRouter,createWebHistory} from 'vue-router'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/ref',
            name:'RefPage',
            component:import('../components/RefPage')
        },
        {
            path:'/reactive',
            name:'ReactivePage',
            component:import('../components/ReactivePage')
        },
        {
            path:'/computed',
            name:'ComputedPage',
            component:import('../components/ComputedPage')
        },
        {
            path:'/modelbind',
            name:'ModelBindingPage',
            component:import('../components/ModelBindingPage')
        },
        {
            path:'/wacthers',
            name:'WatchersPage',
            component:import('../components/WatchersPage')
        },
        {
            path:'/wacth-effect',
            name:'WatchEffectsPage',
            component:import('../components/WatchEffectsPage')
        },
        {
            path:'/props-parent',
            name:'PropParentPage',
            component:import('../components/PropParentPage')
        },
        {
            path:'/event-parent',
            name:'EventParentPage',
            component:import('../components/EventParentPage')
        },
        {
            path:'/inject-parent',
            name:'InjectParentPage',
            component:import('../components/InjectParentPage')
        },
        {
            path:'/final-page',
            name:'FinalPage',
            component:import('../components/FinalPage')
        },
        {
            path:'/async-page',
            name:'AsyncComp',
            component:import('../components/AsyncComp')
        },
        {
            path:'/js-page',
            name:'JsPromiseComp',
            component:import('../components/JsPromiseComp')
        },
    ]
})
export default router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Me from '@/components/Me'
import Commit from '@/components/Commit'
import Wantbuy from '@/components/Wantbuy'
import Login from '@/components/SubComponents/Login'
import lemonLAndR from '@/components/SubComponents/lemonLAndR'
import protocol from '@/components/SubComponents/protocol'
import commitSh from '@/components/SubComponents/commitSh'
import commitPic from '@/components/SubComponents/commitPic'
import shareJn from '@/components/SubComponents/shareJn'
import detail from '@/components/SubComponents/detail'
import mymsg from '@/components/SubComponents/MeSubComponents/mymsg'
import commitShEd from '@/components/SubComponents/MeSubComponents/commitShEd'
import commitJn from '@/components/SubComponents/MeSubComponents/commitJn'
import myLove from '@/components/SubComponents/MeSubComponents/myLove'
import lemon from '@/components/SubComponents/MeSubComponents/lemon'
import adviseUs from '@/components/SubComponents/MeSubComponents/adviseUs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{index:0},
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      meta:{index:0},
      component: Me
    },
    {
      path: '/commit',
      name: 'Commit',
      meta:{index:0},
      component: Commit
    },
    {
      path: '/wantbuy',
      name: 'Wantbuy',
      meta:{index:0},
      component: Wantbuy
    },
    {
      path:'/login',
      name:'Login',
      meta:{index:1},
      component:Login
    },
    {
      path:'/login/lemonLAndR',
      name:'lemonLAndR',
      meta:{index:1},
      component:lemonLAndR
    },
    {
      path:'/protocol',
      name:'protocol',
      meta:{index:2},
      component:protocol
    },
    {
      path:'/commit/commitSh',
      name:'commitSh',
      meta:{index:1},
      component:commitSh
    },
    {
      path:'/commit/shareJn',
      name:'shareJn',
      meta:{index:1},
      component:shareJn
    },
    {
      path:'/home/detail',
      name:'detail',
      meta:{index:1},
      component:detail
    },
    {
      path:'/me/mymsg',
      name:'mymsg',
      meta:{index:1},
      component:mymsg
    },
    {
      path:'/me/commitSh',
      name:'commitSh',
      meta:{index:1},
      component:commitShEd
    },
    {
      path:'/me/commitJn',
      name:'commitJn',
      meta:{index:1},
      component:commitJn
    },
    {
      path:'/me/myLove',
      name:'myLove',
      meta:{index:1},
      component:myLove
    },
    {
      path:'/me/lemon',
      name:'lemon',
      meta:{index:1},
      component:lemon
    },
    {
      path:'/me/adviseUs',
      name:'adviseUs',
      meta:{index:1},
      component:adviseUs
    },
    {
      path:'/commit/commitSh/commitPic',
      name:'commitPic',
      meta:{index:3},
      component:commitPic
    }
  ]
})

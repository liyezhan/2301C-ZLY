import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { BackTop,Cell } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Field } from 'vant';
import { Empty } from 'vant';
import { ConfigProvider } from 'vant';
import { Icon } from 'vant';
createApp(App)
.use(Empty)
.use(ConfigProvider)
.use(Sidebar)
.use(SidebarItem)
.use(Cell)
.use(BackTop)
.use(Swipe)
.use(SwipeItem)
.use(Tabbar)
.use(TabbarItem)
.use(Button)
.use(store)
.use(router)
.use(Icon)
.use(Field)
.mount('#app')

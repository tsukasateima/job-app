import 'vant/lib/index.css'
import '@/assets/css/style.css'
import '@/utils/rem'
import { createApp } from 'vue'

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Checkbox,
  Toast,
  Icon,
  Popup,
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  ActionBarIcon,
  Search,
  Loading,
  Field,
  SwipeCell,
  Uploader,
  Form,
  ActionSheet,
  DatePicker,
  Picker,
  CheckboxGroup,
  Dialog,
  Switch,
  RadioGroup,
  Radio
} from 'vant'
import FooterTabbbar from '@/components/FooterTabbar/FooterTabbbar.vue'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.component('FooterTabbbar', FooterTabbbar)
app.use(router)
app.use(store)
// 绑定vant组件
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Toast)
app.use(Icon)
app.use(Popup)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.use(PullRefresh)
app.use(ActionBarIcon)
app.use(Search)
app.use(Loading)
app.use(Field)
app.use(SwipeCell)
app.use(Uploader)
app.use(Form)
app.use(ActionSheet)
app.use(DatePicker)
app.use(Picker)
app.use(CheckboxGroup)
app.use(Dialog)
app.use(Switch)
app.use(RadioGroup)
app.use(Radio)

app.mount('#app')

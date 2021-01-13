// 整个包的入口
import ColorPicker from './color-picker'
import HmButton from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import CheckboxGroup from './checkedBox-group'
import Radio from './radio'
import RadioGroup from './radioGroup'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'

const components = [
    ColorPicker,
    HmButton,
    Dialog,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Switch,
    Form,
    FormItem
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
}
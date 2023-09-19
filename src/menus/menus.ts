import { uid } from 'quasar'
import { MenuItem } from 'src/localstore'

const MainDrawerMenus = [
   {
    menuId: uid(),
    label: '模板',
    caption: '管理应用模板',
    icon: 'pending',
    target: '/application',
    level: 0,
    sectionBegin: false,
    children: [
      {
        menuId: uid(),
        label: '应用短信模板',
        caption: '管理应用短信模板',
        icon: 'perm_identity',
        target: '/sms/template',
        level: 1,
        sectionBegin: false,
        children: []
      } as MenuItem, {
        menuId: uid(),
        label: '应用邮件模板',
        caption: '管理应用邮件模板',
        icon: 'perm_identity',
        target: '/email/template',
        level: 1,
        sectionBegin: false,
        children: []
      } as MenuItem, {
        menuId: uid(),
        label: '应用内联系',
        caption: '管理应用内联系地址',
        icon: 'perm_identity',
        target: '/contact/template',
        level: 1,
        sectionBegin: false,
        children: []
      } as MenuItem, {
        menuId: uid(),
        label: '前端通知模版',
        caption: '管理前端通知模版',
        icon: 'perm_identity',
        target: '/notif/template',
        level: 1,
        sectionBegin: false,
        children: []
      } as MenuItem
    ]
  } as MenuItem,
] as Array<MenuItem>

export {
  MainDrawerMenus
}

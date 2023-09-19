import { uid } from 'quasar'
import { MenuItem } from 'src/localstore'

const MainDrawerMenus = [
   {
    menuId: uid(),
    label: '任务',
    caption: '任务管理器',
    icon: 'pending',
    target: '/manager',
    level: 0,
    sectionBegin: false,
    children: [
      {
        menuId: uid(),
        label: '任务管理',
        caption: '',
        icon: 'perm_identity',
        target: '/manager/task',
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

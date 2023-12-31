import { MenuItem } from "../interfaces/appInterfaces";

export const menuItem: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInput',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-circle-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen'
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'phone-portrait-outline',
    component: 'SlidesScreen'
  },
  {
    name: 'Change theme',
    icon: 'color-palette-outline',
    component: 'ChangeThemeScreen'
  },
]
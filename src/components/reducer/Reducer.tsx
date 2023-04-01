import { BakeryMenuItemTypes, BakeryMenuTypes } from "../../types/types";


export interface Action<T, P, O> {
  type: T;
  menu: P;
  item?: O;
}

export type MenuAction =
  | Action<'add_new_menu', BakeryMenuTypes, null>
  | Action<'delete_menu', BakeryMenuTypes | BakeryMenuItemTypes, null>
  | Action<'delete_item',  BakeryMenuTypes | BakeryMenuItemTypes, BakeryMenuItemTypes>
  | Action<'edit_item',  BakeryMenuTypes | BakeryMenuItemTypes, BakeryMenuItemTypes>;
  ;


const menuReducer  = (state: BakeryMenuTypes[], action: MenuAction): BakeryMenuTypes[] => {
  switch (action.type) {
    case 'add_new_menu': {
      console.log('added')
      return [...state, action.menu];
    }
    case 'delete_menu': {
      return [...state.filter((menu) => menu.id !== action.menu.id)]
    }
    case 'delete_item': {
      return [...state.map(menu => {
        if (menu.id === action.menu.id && menu.menu) {
          return {
            ...menu,
            menu: menu.menu.filter(item => item.id !== action.item?.id)
          };
        } else {
          return menu;
        }})];
    }
    case 'edit_item': {
      return [...state];
    }
    default: {
      return state;
    }
  }
}

export default menuReducer
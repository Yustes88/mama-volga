import { Dispatch } from "react";
import { useParams } from "react-router-dom";
import MenuItemLayout from "../components/menu-item/MenuItemLayout";
import { Add, MenuAction } from "../components/reducer/Reducer";
import { BakeryMenuTypes } from "../types/types";

type MenuPageProps = {
  bakeryMenu: BakeryMenuTypes[];
  dispatch: Dispatch<MenuAction>;
}

function MenuPage({bakeryMenu, dispatch}: MenuPageProps) {
  let { id } = useParams();
  console.log(id)

  return (
    <>
    <MenuItemLayout id = {id} bakeryData={bakeryMenu} dispatch={dispatch}/>
    </>
  )
}


export default MenuPage;
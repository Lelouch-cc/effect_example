import Buttons from "../pages/Buttons";
import HomePage from "../pages/Home"
import { RoutesType } from "./types";

export const routes: RoutesType[] = [
  {
    name: 'home',
    title: '首页',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'buttons',
    title: '按钮',
    path: '/buttons',
    element: <Buttons />
  },
];

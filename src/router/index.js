import {
  ArticalList,
  ArticalEdit,
  Login,
  NotFound,
  DashBoard,
  Setting,
  TangPing,
  Add,
  Message,
  MyHome,
  Circle,
  Follow,
  RecomMent
} from "../pages";
export const mainRouter = [
  {
    pathname: "/",
    component: TangPing,
    exact: true
  },
  {
    pathname: "/recomment",
    component: RecomMent
  },
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: NotFound
  },
  {
    pathname: "/circle",
    component: Circle
  }
];

export const landingRouter = [
  {
    pathname: "/landing/dashboard",
    component: DashBoard
  },
  {
    pathname: "/landing/setting",
    component: Setting
  },
  {
    pathname: "/landing/artical",
    component: ArticalList,
  },
  {
    pathname: "/landing/artical/:id",
    component: ArticalEdit
  },
  {
    pathname: "/landing/add",
    component: Add
  },
  {
    pathname: "/landing/message",
    component: Message
  },
  {
    pathname: "/landing/myhome",
    component: MyHome
  },
  {
    pathname: "/landing/circle",
    component: Circle
  },
  {
    pathname: "/landing/follow",
    component: Follow
  }
];

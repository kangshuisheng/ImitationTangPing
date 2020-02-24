// import ArticalList from "./Articals";
// import DashBoard from "./DashBoard";
// import Login from "./Login";
// import NotFound from "./NotFound";
// import Setting from "./Settings";
// import ArticalEdit from "./Articals/Edit";
import Loadable from "react-loadable";
import { Loading } from "../components";

const DashBoard = Loadable({
  loader: () => import("./DashBoard"),
  loading: Loading
});
const ArticalEdit = Loadable({
  loader: () => import("./Articals/Edit"),
  loading: Loading
});
const ArticalList = Loadable({
  loader: () => import("./Articals"),
  loading: Loading
});
const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading
});
const Setting = Loadable({
  loader: () => import("./Settings"),
  loading: Loading
});
const TangPing = Loadable({
  loader: () => import("./TangPing"),
  loading: Loading
});
const Add = Loadable({
  loader: () => import("./Add"),
  loading: Loading
});
const Message = Loadable({
  loader: () => import("./Message"),
  loading: Loading
});
const MyHome = Loadable({
  loader: () => import("./MyHome"),
  loading: Loading
});
const Circle = Loadable({
  loader: () => import("./Circle"),
  loading: Loading
});
const RecomMent = Loadable({
  loader: () => import("./RecomMent"),
  loading: Loading
});
const Follow = Loadable({
  loader: () => import("./Follow"),
  loading: Loading
});

export {
  ArticalList,
  DashBoard,
  Login,
  NotFound,
  Setting,
  ArticalEdit,
  TangPing,
  Message,
  MyHome,
  Add,
  Circle,
  Follow,
  RecomMent
};

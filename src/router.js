/* eslint-disable no-unused-vars */
//对设计稿进行分析，根据实际情况来配置路由表，其中 components 用来放那些可以重复使用的组件，例如各种导航栏（分析设计稿来确定要用多少种组件），pages放
//那些页面
import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Order from "./pages/order";
import OrderConfirm from "./pages/orderConfirm";
import OrderList from "./pages/orderList";
import OrderPay from "./pages/orderPay";
import AliPay from "./pages/alipay";
import Login from "./pages/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home, //组件不能是字符串
      redirect: "/index",
      children: [
        {
          path: "index",
          name: "index",
          component: Index,
        },
        {
          path: "product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "detail/:id",
          name: "detail",
          component: Detail,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list", //子路由不用加斜杠/
          name: "order-list",
          component: OrderList,
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay,
        },
        {
          path: "alipay",
          name: "alipay",
          component: AliPay,
        },
      ],
    },
  ],
});

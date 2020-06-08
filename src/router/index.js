import Vue from "vue";
import VueRouter from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import Product from "../components/Product.vue";
import CheckoutView from "../views/CheckoutView.vue";
import AdminView from "../views/AdminView.vue";
import AccountView from "../views/AccountView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import TestAPIView from "@/views/TestAPIView";
// import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/testapi",
    name: "TestApi",
    component: TestAPIView,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsView,
    children: [
      {
        path: ":id",
        name: "Product",
        component: Product,
      },
    ],
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
<<<<<<< HEAD
    beforeEnter: (to, from, next) => {
      if (store.state.currentUser.role != "admin") {
        store.commit("toggleLogin");
        next({ path: "/" });
      } else {
        next();
      }
    },
=======
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   if (store.state.currentUser.role != "admin") {
    //     alert("Du måste vara inloggad som admin för att nå resursen");
    //     store.commit("toggleLogin");
    //     next({ path: "/" });
    //   } else {
    //     console.log("Navigation complete");
    //     next();
    //   }
    // },
>>>>>>> 7d33660cf1f90e0828ddc0bd7ca0f9f43e364f9a
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
<<<<<<< HEAD
    beforeEnter: (to, from, next) => {
      if (store.state.currentUser.role != "customer") {
        store.commit("toggleLogin");
        next({ path: "/" });
      } else {
        next();
      }
    },
=======
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   if (store.state.currentUser.role != "customer") {
    //     alert("Du måste vara inloggad som kund för att nå resursen");
    //     store.commit("toggleLogin");
    //     next({ path: "/" });
    //   } else {
    //     console.log("Navigation complete");
    //     next();
    //   }
    // },
>>>>>>> 7d33660cf1f90e0828ddc0bd7ca0f9f43e364f9a
  },
  {
    path: "/registration",
    name: "Registration",
    component: RegistrationView,
<<<<<<< HEAD
    beforeEnter: (to, from, next) => {
      if (store.state.currentUser.role != "") {
        store.commit("toggleLogin");
        next({ path: "/" });
      } else {
        next();
      }
    },
=======
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   if (store.state.currentUser.role != "") {
    //     alert("Du måste vara utloggad för att nå resursen");
    //     store.commit("toggleLogin");
    //     next({ path: "/" });
    //   } else {
    //     console.log("Navigation complete");
    //     next();
    //   }
    // },
>>>>>>> 7d33660cf1f90e0828ddc0bd7ca0f9f43e364f9a
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

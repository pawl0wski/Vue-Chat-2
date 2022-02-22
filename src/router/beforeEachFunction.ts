import { useUserStore } from "@/stores/user";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function beforeEach(
    from: RouteLocationNormalized,
    to: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    let userStore = useUserStore();
    if (from.meta.requiresAuth) {
        if (!userStore.loggedIn) {
            next({
                path: "/login",
            });
        }
    }
    if (from.meta.onlyIfNotLoggedIn) {
        if (userStore.loggedIn) {
            next({
                path: "/",
            });
        }
    }
    next();
}
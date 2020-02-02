class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    loadRoute(...urlSegs) {
        const matchedRoute = this._matchUrlToRoute(urlSegs);

        const url = `/${urlSegs.join('/')}`;
        history.pushState({}, 'This shit is working!', url);

        const routerOutElement = document.querySelector('#app');
        routerOutElement.innerHTML = matchedRoute.template;
    }

    _matchUrlToRoute(urlSegs) {
        const matchedRoutes = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1);

            if (routePathSegs.length !== urlSegs.length) {
                return false;
            }

            return routePathSegs.every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        });

        return matchedRoutes;
    }

    _loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

        this.loadRoute(...pathSegs);
    }
}
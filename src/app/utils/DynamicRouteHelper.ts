import {Injectable} from "angular2/core";
import {RouteRegistry} from "angular2/router";
import {Type} from "angular2/core";
@Injectable()
export class DynamicRouteConfigurator {
    /**
     * 构造
     * @param registry
     */
    constructor(private registry: RouteRegistry) {}
    /**
     * 获得已经注册的@RouteConfig routes
     * @param component
     * @returns {T|any}
     */
    getRoutes(component: Type) {
        var routes= Reflect.getMetadata('annotations',component)
            .filter(a=>{
                return a.constructor.name === 'RouteConfig';
            }).pop();
        return routes;
    }

    /**
     * 重置路由
     * @param component
     * @param routeConfig
     */
    updateRoutes(component: Type, routeConfig) {
        let annotations = Reflect.getMetadata('annotations',component);
        let routeConfigIndex = -1;
        for (let i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                routeConfigIndex = i;
                break;
            }
        }
        if (routeConfigIndex < 0) {
            throw new Error('No route metadata attached to the component');
        }
        annotations[routeConfigIndex] = routeConfig;
        Reflect.defineMetadata('annotations', annotations, component);
    }

    /**
     * 向指定的Component添加路由
     * @param component
     * @param route
     */
    addRoute(component: Type, route) {
        let routeConfig = this.getRoutes(component);
        routeConfig.configs.push(route);
        this.updateRoutes(component, routeConfig);
        this.registry.config(component, route);
    }
}
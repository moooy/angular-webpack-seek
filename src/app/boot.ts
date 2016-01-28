import {bootstrap}    from 'angular2/platform/browser'
import {HomeComponent} from './components/home/home.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TableService} from './services/table.service';
import {TableToolbarService} from './services/tableToolbar.service';
import {EventService} from "./services/event.service";
import {NavigationService} from "./services/navigation.service";
import {MainContentService} from "./services/main-content.service";
import {LoggerService} from "./services/logger.service";
import {DynamicRouteConfigurator} from "./utils/DynamicRouteHelper";
import {RouteRegistryService} from "./services/route.service";
import {HomeService} from "./services/home.service";
import {ComponentLoaderService} from "./services/component-loader.service";
import {TableConst} from "./services/tableService.injector";


bootstrap(HomeComponent,[RouteRegistryService,DynamicRouteConfigurator,ROUTER_PROVIDERS,HTTP_PROVIDERS,
    TableService,TableToolbarService,EventService,NavigationService,MainContentService,LoggerService,HomeService,
ComponentLoaderService,TableConst]);

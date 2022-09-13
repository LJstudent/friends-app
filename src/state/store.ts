import { AnyAction, applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Client } from "../data/client";
import logger from "redux-logger";
import { rootReducers } from "./reducers/root.reducers";
import { rootEpics } from "./epics/root.epics";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IClientDependency {
    client: Client;
}

const client = new Client();

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, any, IClientDependency>({
    dependencies: { client }
})

const middleware = [epicMiddleware, logger]

export function configure(): any {
    // dev tools
    const composeEnchancers = composeWithDevTools({ serialize: true });
    const store = createStore(
        rootReducers,
        composeEnchancers(applyMiddleware(...middleware))
    );


    epicMiddleware.run(rootEpics);

    middleware.push(logger);

    return store;
}


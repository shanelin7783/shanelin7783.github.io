import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducer from "@core/reducer";
import { rootEpic } from "@core/epics";
import { request } from "universal-rxjs-ajax";

export default function initStore(initialState) {
    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            request,
        },
    });
    const store = createStore(reducer, initialState, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    return store;
}

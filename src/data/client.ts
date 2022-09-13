import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { IEvent } from "../model/interfaces/IEvent";
import { Method } from "./enum/method";

export const BASE_URL = `http://192.168.2.32:3004`

export class Client {

    public createEvent(event: IEvent) {
        // we return the ajax call
        return ajax({
            url: `${BASE_URL}/event`,
            // we can add a body because get request
            body: {
                activity: event.activity,
                date: event.date,
                userId: 1
            },
            headers: {
                "Content-Type": "application/json"
            },
            // method
            method: Method.POST,
        });
    }

    public GetEvents() {
        return ajax({
            url: `${BASE_URL}/event`,
            headers: {
                "Content-Type": "application/json"
            },
            // method
            method: Method.GET,
        }).pipe(
            map((res: AjaxResponse) => {
                return res.response;
            })
        )
    }
}

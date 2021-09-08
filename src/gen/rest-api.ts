/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.32.889 on 2021-09-06 14:48:59.

import {Observable} from 'rxjs';

export interface Kunde extends WithIdEntity {
    nummer: number;
    vorname: string;
    nachname: string;
    addresse: string;
    befund: string;
}

export interface ClientSearchRequest {
    vorname: string;
    nachname: string;
    nummer: number;
}

export interface ClientSearchResult {
    kunden: Kunde[];
}

export interface WithIdEntity {
    id: number;
}

export interface RestApplication {

    /**
     * HTTP PUT /dentist/client
     * Java method: ch.organit.dentist.app.rest.DentistRestController.saveClient
     */
    saveClient(kunde: Kunde): RestResponse<Kunde>;

    /**
     * HTTP DELETE /dentist/client/{id}
     * Java method: ch.organit.dentist.app.rest.DentistRestController.deleteClient
     */
    deleteClient(id: number): RestResponse<boolean>;

    /**
     * HTTP GET /dentist/client/{id}
     * Java method: ch.organit.dentist.app.rest.DentistRestController.getClient
     */
    getClient(id: number): RestResponse<Kunde>;

    /**
     * HTTP PUT /dentist/clients
     * Java method: ch.organit.dentist.app.rest.DentistRestController.searchClients
     */
    searchClients(request: ClientSearchRequest): RestResponse<ClientSearchResult>;

    /**
     * HTTP GET /dentist/isAlive
     * Java method: ch.organit.dentist.app.rest.DentistRestController.isAlive
     */
    isAlive(): RestResponse<string>;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class RestApplicationClient implements RestApplication {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP PUT /dentist/client
     * Java method: ch.organit.dentist.app.rest.DentistRestController.saveClient
     */
    saveClient(kunde: Kunde): RestResponse<Kunde> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`dentist/client`, data: kunde });
    }

    /**
     * HTTP DELETE /dentist/client/{id}
     * Java method: ch.organit.dentist.app.rest.DentistRestController.deleteClient
     */
    deleteClient(id: number): RestResponse<boolean> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`dentist/client/${id}` });
    }

    /**
     * HTTP GET /dentist/client/{id}
     * Java method: ch.organit.dentist.app.rest.DentistRestController.getClient
     */
    getClient(id: number): RestResponse<Kunde> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`dentist/client/${id}` });
    }

    /**
     * HTTP PUT /dentist/clients
     * Java method: ch.organit.dentist.app.rest.DentistRestController.searchClients
     */
    searchClients(request: ClientSearchRequest): RestResponse<ClientSearchResult> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`dentist/clients`, data: request });
    }

    /**
     * HTTP GET /dentist/isAlive
     * Java method: ch.organit.dentist.app.rest.DentistRestController.isAlive
     */
    isAlive(): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`dentist/isAlive` });
    }
}

export type RestResponse<R> = Observable<R>;

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}

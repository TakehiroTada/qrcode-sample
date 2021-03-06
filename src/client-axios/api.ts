// tslint:disable
/**
 * Kinds Polaris
 * kinds-polaris
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse201
     */
    status?: string;
    /**
     * 
     * @type {Reservation}
     * @memberof InlineResponse201
     */
    reservations?: Reservation;
}
/**
 * 
 * @export
 * @interface Reservation
 */
export interface Reservation {
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    visitor?: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    start_date?: string;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    end_date?: string;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    room_id?: number;
    /**
     * 
     * @type {number}
     * @memberof Reservation
     */
    created_staff_id?: number;
    /**
     * 
     * @type {string}
     * @memberof Reservation
     */
    created_at?: string;
}

/**
 * ReservationsApi - axios parameter creator
 * @export
 */
export const ReservationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 受付予約を登録する
         * @summary 受付予約登録
         * @param {Reservation} title ああ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reservationsAddPost: async (title: Reservation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'title' is not null or undefined
            if (title === null || title === undefined) {
                throw new RequiredError('title','Required parameter title was null or undefined when calling reservationsAddPost.');
            }
            const localVarPath = `/reservations/add`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof title !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(title !== undefined ? title : {}) : (title || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReservationsApi - functional programming interface
 * @export
 */
export const ReservationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 受付予約を登録する
         * @summary 受付予約登録
         * @param {Reservation} title ああ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reservationsAddPost(title: Reservation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201>> {
            const localVarAxiosArgs = await ReservationsApiAxiosParamCreator(configuration).reservationsAddPost(title, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReservationsApi - factory interface
 * @export
 */
export const ReservationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 受付予約を登録する
         * @summary 受付予約登録
         * @param {Reservation} title ああ
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reservationsAddPost(title: Reservation, options?: any): AxiosPromise<InlineResponse201> {
            return ReservationsApiFp(configuration).reservationsAddPost(title, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReservationsApi - object-oriented interface
 * @export
 * @class ReservationsApi
 * @extends {BaseAPI}
 */
export class ReservationsApi extends BaseAPI {
    /**
     * 受付予約を登録する
     * @summary 受付予約登録
     * @param {Reservation} title ああ
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReservationsApi
     */
    public reservationsAddPost(title: Reservation, options?: any) {
        return ReservationsApiFp(this.configuration).reservationsAddPost(title, options).then((request) => request(this.axios, this.basePath));
    }

}



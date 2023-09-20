import { ChainType } from '../basetypes/const';

export enum EndpointState {
    EndpointDefault = 'EndpointDefault',
    EndpointAvaliable = 'EndpointAvaliable',
    EndpointUnstable = 'EndpointUnstable',
    EndpointError = 'EndpointError',
}

export interface Endpoint {
    ID: string;
    ChainType: ChainType;
    ChainID: string;
    Address: string;
    State: EndpointState;
    Remark: string;
}

export interface CreateEndpointRequest {
    ChainType: ChainType;
    ChainID: string;
    Address: string;
    State: EndpointState;
    Remark: string;
}
  
export interface CreateEndpointResponse {
    Info: Endpoint;
}
  

export interface DeleteEndpointRequest {
    ID: string;
}
  
export interface DeleteEndpointResponse {
    Info: Endpoint;
}
  
export interface GetEndpointResponse {
    Info: Endpoint;
}
  
export interface GetEndpointsRequest {
    /** @format int32 */
    Offset: number;
    /** @format int32 */
    Limit: number;
}

export interface UpdateEndpointRequest {
    ID: string;
    ChainType: ChainType;
    ChainID: string;
    Address: string;
    State: EndpointState;
    Remark: string;
}
  
export interface UpdateEndpointResponse {
    Info: Endpoint;
}
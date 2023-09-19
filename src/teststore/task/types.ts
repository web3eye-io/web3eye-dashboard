import { ChainType } from '../basetypes/const';
import { SyncState } from './const';

export interface SyncTask {
    ID: string;
    ChainType: ChainType;
    ChainID: string;
    /** @format uint64 */
    Start: string;
    /** @format uint64 */
    End: string;
    /** @format uint64 */
    Current: string;
    Topic: string;
    Description: string;
    SyncState: SyncState;
    Remark: string;
}

export interface CreateSyncTaskRequest {
    ID: string;
    ChainType: ChainType;
    ChainID: string;
    /** @format uint64 */
    Start: string;
    /** @format uint64 */
    End: string;
    /** @format uint64 */
    Current: string;
    Topic: string;
    Description: string;
    SyncState: SyncState;
    Remark: string;
  }
  
  export interface CreateSyncTaskResponse {
    Info: SyncTask;
  }
  
  export interface DeleteSyncTaskRequest {
    ID: string;
  }
  
  export interface DeleteSyncTaskResponse {
    Info: SyncTask;
  }
  
  export interface UpdateSyncTaskRequest {
    ID: string;
    ChainType: ChainType;
    ChainID: string;
    /** @format uint64 */
    Start: string;
    /** @format uint64 */
    End: string;
    /** @format uint64 */
    Current: string;
    Topic: string;
    Description: string;
    SyncState: SyncState;
    Remark: string;
  }
  
  export interface UpdateSyncTaskResponse {
    Info: SyncTask;
  }

  export interface GetSyncTasksRequest {
    /** @format int32 */
    Offset: number;
    /** @format int32 */
    Limit: number;
  }
  
  export interface GetSyncTasksResponse {
    Infos: SyncTask[];
    /** @format int64 */
    Total: number;
  }
  
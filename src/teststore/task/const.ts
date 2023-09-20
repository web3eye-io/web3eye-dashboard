/** @default "Unknown" */
export enum Type {
    Unknown = 'Unknown',
    Ethereum = 'Ethereum',
    Solana = 'Solana',
}
  
/** @default "Default" */
export enum SyncState {
    Default = 'Default',
    Start = 'Start',
    Pause = 'Pause',
    Finish = 'Finish',
    Failed = 'Failed',
}

export enum API {
    CREATE_SYNCTASK = '/api/entrance/v1/create/synctask',
    UPDATE_SYNCTASK = '/api/entrance/v1/update/synctask',
    DELETE_SYNCTASK = '/api/entrance/v1/delete/synctask',
    GET_SYNCTASKS   = '/api/entrance/v1/get/synctasks',
}
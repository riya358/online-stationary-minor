export interface IBaseEntity {
    id: number;
}

export interface ITimestamp {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISoftDelete {
    deletedAt?: Date;
}
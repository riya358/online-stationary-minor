import { IBaseEntity } from './base-entity';

export interface IFile extends IBaseEntity {
    uniqueName: string;
    originalName: string;
    extension: string;
    downloadUrl: string;
    size: number;
    mimeType: string;
}

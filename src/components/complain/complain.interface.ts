import { IComplainModel } from './complain.model';

/**
 * @export
 * @interface IComplainsService
 */
export interface IComplainsService {

    /**
     * @returns {Promise<IComplainModel[]>}
     * @memberof IComplainsService
     */
    findAll(): Promise<IComplainModel[]>;

    /**
     * @param {string} id
     * @returns {Promise<IComplainModel>}
     * @memberof IComplainsService
     */
    findById(id: string): Promise<IComplainModel>;

    /**
     * @param {IComplainModel} IComplainModel
     * @returns {Promise<IComplainModel>}
     * @memberof IComplainsService
     */
    insert(IComplainModel: IComplainModel): Promise<IComplainModel>;

    /**
     * @param {string} id
     * @returns {Promise<IComplainModel>}
     * @memberof IComplainsService
     */
    remove(id: string): Promise<IComplainModel>;

    /**
     * @param {IComplainModel} IComplainModel
     * @returns {Promise<IComplainModel>}
     * @memberof IComplainsService
     */
    replace(id: string, body: Object): Promise<IComplainModel>;

    /**
     * @param {string} id
     * @returns {Promise<IComplainModel>}
     * @memberof IComplainsService
     */
    update(id: string, body: Object): Promise<IComplainModel>;
}

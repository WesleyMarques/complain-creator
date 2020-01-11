import { IUserModel } from './complain.model';

/**
 * @export
 * @interface IComplainsService
 */
export interface IComplainsService {

    /**
     * @returns {Promise<IUserModel[]>}
     * @memberof IComplainsService
     */
    findAll(): Promise<IUserModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IUserModel>}
     * @memberof IComplainsService
     */
    findOne(code: string): Promise<IUserModel>;

    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof IComplainsService
     */
    insert(IUserModel: IUserModel): Promise<IUserModel>;

    /**
     * @param {string} id
     * @returns {Promise<IUserModel>}
     * @memberof IComplainsService
     */
    remove(id: string): Promise<IUserModel>;
}

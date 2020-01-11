import * as Joi from 'joi';
import UserModel, { IComplainModel } from './complain.model';
import UserValidation from './complain.validator';
import { IComplainsService } from './complain.interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IComplainModelService}
 */
const ComplainService: IComplainsService = {
    /**
     * @returns {Promise < IComplainModel[] >}
     * @memberof ComplainService
     */
    async findAll(): Promise < IComplainModel[] > {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async findOne(id: string): Promise < IComplainModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.getUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await UserModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IComplainModel} user
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async insert(body: IComplainModel): Promise < IComplainModel > {
        try {
            const validate: Joi.ValidationResult < IComplainModel > = UserValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IComplainModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async remove(id: string): Promise < IComplainModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.removeUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IComplainModel = await UserModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ComplainService;

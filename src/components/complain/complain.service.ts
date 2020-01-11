import * as Joi from 'joi';
import ComplainModel, { IComplainModel } from './complain.model';
import ComplainValidation from './complain.validator';
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
            return await ComplainModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async findById(id: string): Promise < IComplainModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ComplainValidation.getUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ComplainModel.findOne({
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
            const validate: Joi.ValidationResult < IComplainModel > = ComplainValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const complain: IComplainModel = await ComplainModel.create(body);

            return complain;
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
            } > = ComplainValidation.removeUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const complain: IComplainModel = await ComplainModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return complain;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IComplainModel} complain
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async replace(id: string, body: IComplainModel): Promise < IComplainModel > {
        try {
            const validate: Joi.ValidationResult < IComplainModel > = ComplainValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const complain: IComplainModel = await ComplainModel.update({_id: id}, body);

            return complain;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IComplainModel} complain
     * @returns {Promise < IComplainModel >}
     * @memberof ComplainService
     */
    async update(id: string, body: object): Promise < IComplainModel > {
        try {
            const complain: IComplainModel = await ComplainModel.findOne({_id: id});
            complain.set(body);
            await complain.save();

            return complain;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ComplainService;

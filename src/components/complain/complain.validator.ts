import * as Joi from 'joi';
import Validation from '../validation';
import { IComplainModel } from './complain.model';

/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class UserValidation extends Validation {

    /**
     * Creates an instance of UserValidation.
     * @memberof UserValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IComplainModel} params
     * @returns {Joi.ValidationResult<IComplainModel >}
     * @memberof UserValidation
     */
    createUser(
        params: IComplainModel
    ): Joi.ValidationResult < IComplainModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    getUser(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    removeUser(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new UserValidation();

import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IComplainModel
 * @extends {Document}
 */
export interface IComplainModel extends Document {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;

    facebook: string;
    tokens: AuthToken[];

    profile: {
        name: string,
        gender: string,
        location: string,
        website: string,
        picture: string
    };
    comparePassword: (password: string) => Promise < boolean > ;
    gravatar: (size: number) => string;
}

export type AuthToken = {
    accessToken: string,
    kind: string
};

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *        tokens:
 *          type: array
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
const UserSchema: Schema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    tokens: Array,
}, {
    collection: 'usermodel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {
    const user: any = this; // tslint:disable-line
});



/**
 * Helper method for getting user's gravatar.
 */
UserSchema.methods.gravatar = function (size: number): string {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5: string = crypto.createHash('md5').update(this.email).digest('hex');

    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export default connections.db.model < IComplainModel > ('UserModel', UserSchema);

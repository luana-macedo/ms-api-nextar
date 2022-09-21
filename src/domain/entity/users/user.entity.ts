import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';
import { Permission } from './enums/permission.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true, index: {unique: true}})
    email: string;

    @Prop()
    permissions: Permission[];

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

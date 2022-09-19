import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';
import { Permission } from './enums/permission.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

    @Prop()
    permissions: Permission[];

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

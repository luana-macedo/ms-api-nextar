import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: String;

    @Prop()
    password: String;

    @Prop()
    email: String;

    @Prop()
    permission: boolean;

    @Prop()
    phone: String;
}

export const UserSchema = SchemaFactory.createForClass(User);

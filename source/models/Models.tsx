// import { BSON } from "realm";
import {BSON, Realm} from 'realm';

export class Feature extends Realm.Object<Feature> {
  _id!: BSON.ObjectId;
  email!: string;
  first_name!: string;
  last_name!: string;
  phone!: string;
  role!: string;
  date_of_birth?: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Feature',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      email: 'string',
      first_name: 'string',
      last_name: 'string',
      phone: 'string',
      role: 'string',
      date_of_birth: 'date?'
    },
    primaryKey: '_id',
  };
}


export class users extends Realm.Object<users> {
  _id!: BSON.ObjectId;
  email!: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: string;
  date_of_birth?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  

  static schema: Realm.ObjectSchema = {
    name: 'users',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      dateOfBirth: 'date?',
      email: 'string',
      firstName: 'string?',
      lastName: 'string?',
      phone: 'string?',
      role: 'string?',
      createdAt: { type: 'date',  default: () => new Date() },
      updatedAt: { type: 'date',  default: () => new Date() },
    },
  };
}

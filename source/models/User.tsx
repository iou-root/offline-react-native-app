import { ObjectSchema, BSON } from "realm";

class users extends Realm.Object<users> {
  _id!: BSON.ObjectId;
  email!: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: string;
  date_of_birth?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  

  static schema: ObjectSchema = {
    name: 'users',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      email: { type: 'string' },
      firstName: 'string?',
      lastName: 'string?',
      phone: 'string?',
      role: 'string?',
      dateOfBirth: 'date?',
      createdAt: { type: 'date',  default: () => new Date() },
      updatedAt: { type: 'date',  default: () => new Date() },
    },
    primaryKey: '_id',
  };
}

export default users;
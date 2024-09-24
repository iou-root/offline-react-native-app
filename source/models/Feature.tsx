import { ObjectSchema, BSON } from "realm";

class Feature extends Realm.Object<Feature> {
  _id!: BSON.ObjectId;
  email!: string;
  first_name!: string;
  last_name!: string;
  phone!: string;
  role!: string;
  date_of_birth?: Date;

  static schema: ObjectSchema = {
    name: 'Feature',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      email: { type: 'string' },
      first_name: { type: 'string' },
      last_name: { type: 'string' },
      phone: { type: 'string' },
      role: { type: 'string' },
      date_of_birth: { type: 'date', optional: true },
    },
    primaryKey: '_id',
  };
}

export default Feature;
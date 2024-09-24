// import { } from '@realm/react';
const { createRealmContext } = require('@realm/react');
const { users, Feature } = require('./models');
const { ItemSchema } = require('./ItemSchema.tsx');

export const realmContext = createRealmContext({
  schema: [
    users,
    Feature,
    ItemSchema
  ],
  schemaVersion: 1
});



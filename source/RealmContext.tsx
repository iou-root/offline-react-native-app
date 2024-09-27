import { createRealmContext } from '@realm/react';
import { Item } from "./ItemSchema";
import { Feature, users } from "./models/Models";


export const realmContext = createRealmContext({
  schema: [
    users,
    Feature,
    Item
  ],
  schemaVersion: 1
});



import React, {useEffect} from 'react';
import {useApp, useUser} from '@realm/react';
import { BSON } from 'realm';


export async function WriteCustomUserData( email: string, role: string, firstName: string, lastName: string, phone: string, dateOfBirth: Date, userId: string) {
  const user = useUser();
  let payload = {
    email,
    phone,
    firstName,
    lastName,
    role,
    dateOfBirth
  }
  // const generatedObjectId = new BSON.ObjectId(payload?.id);
    const customUserDataCollection = user
      .mongoClient('mongodb-atlas')
      .db('data-sync-01')
      .collection('users');
    const filter = {
      _id: userId,
    };
    const updateDoc = {
      $set: {
        // _id: generatedObjectId,
        // Set User ID if it's not already set
        // Set the logged in user's favorite color
        payload, 
      },
    };
    const options = {upsert: true};
    await customUserDataCollection.updateOne(filter, updateDoc, options);
    // Refresh custom user data once it's been updated on the server
    const customUserData = await user.refreshCustomData();
    console.log(customUserData);
  }


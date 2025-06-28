import {Client,Account,Id,Avatars} from 'react-native-appwrite'

export const client = new client()
.setProject('685fff160013703a2d93')
.setPlatform('dev.nik.reactnativeapp');

export const account = new Account(client)
export const avatars = new Avatars(client)
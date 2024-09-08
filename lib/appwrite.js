import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.17days',
    projectId: '66dd1e1d00290e93612f',
    databaseId: '66dd2103000c0ba5dbc8',
    userCollectionId: '66dd21430025dc9479ae',
    videoCollectionId: '66dd216f000c7434a2ac',  
    storageId: '66dd253300073ab161c8'
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser  = async(email, password, username) => {
    try{
        const newAccount = await account.create(ID.unique(),email, password, username);
        if (!newAccount) throw Error

        const avatarURL = avatars.getInitials(username)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(), {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarURL
        })
        return newUser;
        
        await SignIn()
    }catch(e){}
}

export async function SignIn(email, password){
    try{
        const session = await account.createSession(email, password);
        return session;
    }catch(e){}
}


    
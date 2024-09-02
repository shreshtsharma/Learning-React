import conf from '../conf/conf'

import {Client,Account,ID} from "appwrite"

export class AuthService {
    client=new Client();
    account;
    AuthService(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        
        this.account=new Account(this.client)
    }

    // made a method for create account because now it does not depend on only appwrite as a backend service
    // if we want to change the service we can change in the function but calling the function anf parameters remains the same
    async createAccount({email,password,name}){
        try {
             
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if(userAccount)
            {
                // if account is created successfully call another mehtod which log in user successfully

                return this.login({email,password})
            }
            else
            {
                return userAccount
            }

        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
             return await this.account.createEmailPasswordSession(email,password);

        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }
        // if accountis not found then return null;
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:: logout :: error " , error);
            
        }
    }
}

const authService=new AuthService();

export default authService
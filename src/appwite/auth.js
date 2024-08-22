import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account;

    constructor(){
        this.client
             .setEndpoint(conf.appwiteUrl)
             .setProject(conf.appwiteProjectId)
             this.account= new Account(this.client)
    }
    
    async CreateAccount({email,password,name}){
        console.log("hello ji i am here");
        try {

            const userAccount =await this.account.create(ID.unique(),email,password,name)
            

            if (userAccount) {
                //call another function here
                this.login({email,password})
                
            } else {

              return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrrentUser(){
       
        
        try {
           return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getCurrrentUser :: error" , error)
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            console.log("appwrite service :: logout :: error" , error)
        }
    }

}

const authService = new AuthService();

export default authService
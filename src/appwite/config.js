import conf from "../conf/conf.js";
import { Client,Databases,ID,Storage,Query } from "appwrite";

export class Service{
   client=new Client()
   databases;
   bucket;

   constructor(){
    this.client
    .setEndpoint(conf.appwiteUrl)
    .setProject(conf.appwiteProjectId);
    this.databases = new Databases(this.client)
    this.bucket=new Storage(this.client)
   }

   async createPost({title,slug,content,featuredImage,status,userId}){
    try {
        return await this.databases.createDocument(
            conf.appwiteDatabaseId, 
            conf.appwiteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )
    } catch (error) {
        console.log("appwrite service :: createPost :: error" , error)
    }
   }

   async updatePost(slug,{title,content,featuredImage,status}){
    try {
        return await this.databases.updateDocument(
            conf.appwiteDatabaseId,
            conf.appwiteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
    } catch (error) {
        console.log("appwrite service :: updatePost :: error" , error)
    }
   }

   async deletePost(slug){
         try {
            return await this.databases.deleteDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                slug
            )
            return true
         } catch (error) {
            console.log("appwrite service :: deletePost :: error" , error)
            return false
         }
   }

   async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwiteDatabaseId,
            conf.appwiteCollectionId,
            slug
        )
    } catch (error) {
        console.log("appwrite service :: getPost :: error" , error)
        return false
    }
   }

   async getPosts(Queries=[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwiteDatabaseId,
            conf.appwiteCollectionId,
            Queries,
            
        )
    } catch (error) {
        console.log("appwrite service :: getPosts :: error" , error)
        return false
    }
   }
   // flie related functions 
   async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwiteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("appwrite service :: uploadFile :: error" , error)
        return false
    }
   }

   async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwiteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("appwrite service :: deleteFile :: error" , error)
        return false
    }
   }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwiteBucketId,
        fileId
    )
   }
}

const service=new Service()

export default service
const conf = {
    appwiteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwiteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwiteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwiteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwiteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)

}

export default conf
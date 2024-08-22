import React,{useState,useEffect} from "react";
import { Container ,PostCard} from "../components";
import appwriteService from '../appwite/config'

function Home(){

    const [posts, setPosts] = useState([])
    useEffect(() => {

        appwriteService.getPosts().then((posts) =>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
    

    if(posts.length===0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap ">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                                <div className="flex justify-between flex-wrap gap-2">
                                <div
                                   class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400 "
                                 >
                                   <div
                                     class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
                                   >
                                     <svg
                                       viewBox="0 0 16 20"
                                       fill="currentColor"
                                       xmlns="http://www.w3.org/2000/svg"
                                       aria-hidden="true"
                                       class="w-10 h-10 text-gray-200 dark:text-gray-600"
                                     >
                                       <path
                                         d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                                       ></path>
                                       <path
                                         d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                                       ></path>
                                     </svg>
                                   </div>
                                   <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                   <div class="flex items-center mt-4">
                                     <svg
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       xmlns="http://www.w3.org/2000/svg"
                                       aria-hidden="true"
                                       class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                                     >
                                       <path
                                         d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                                       ></path>
                                     </svg>
                                     <div>
                                       <div
                                         class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                                       ></div>
                                       <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                     </div>
                                   </div>
                                   <span class="sr-only">Loading...</span>
                                 </div>

                                 <div
                                   class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400 hidden md:block "
                                 >
                                   <div
                                     class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
                                   >
                                     <svg
                                       viewBox="0 0 16 20"
                                       fill="currentColor"
                                       xmlns="http://www.w3.org/2000/svg"
                                       aria-hidden="true"
                                       class="w-10 h-10 text-gray-200 dark:text-gray-600"
                                     >
                                       <path
                                         d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                                       ></path>
                                       <path
                                         d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                                       ></path>
                                     </svg>
                                   </div>
                                   <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                   <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                   <div class="flex items-center mt-4">
                                     <svg
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       xmlns="http://www.w3.org/2000/svg"
                                       aria-hidden="true"
                                       class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                                     >
                                       <path
                                         d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                                       ></path>
                                     </svg>
                                     <div>
                                       <div
                                         class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
                                       ></div>
                                       <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                     </div>
                                   </div>
                                   <span class="sr-only">Loading...</span>
                                 </div>
                                </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        )
    }

    return(
        <div className="w-full min-h-[100vh] py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                       <div key={post.id} className="p-2 w-1/4">
                        <PostCard {...post} />
                       </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    
}

export default Home;
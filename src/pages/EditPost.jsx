import React ,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import appwriteService from '../appwite/config'
import { Container,PostForm} from "../components";

function EditPost(){
    const {slug} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
              if(post){
                setPost(post)
              }
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])

    return post ? (
        <div className="py-8">
            <Container>
               <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
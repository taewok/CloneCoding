import {useRouter} from "next/router"
import Seo from "../components/Seo";

const Detail = ({params}) => {
    const router = useRouter();
    const [title,id] = params;
    console.log(router)
    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
};
export default Detail;

export function getServerSideProps({query:{params}}){
    console.log(params)
    return{
        props:{
            params
        },
    }
}

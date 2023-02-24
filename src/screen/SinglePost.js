import { useParams } from "react-router-dom"


function SinglePost() {
    const params = useParams();
    console.log(params)

    let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
    return (
        <h1>Hamza</h1>
    )





}
export default SinglePost
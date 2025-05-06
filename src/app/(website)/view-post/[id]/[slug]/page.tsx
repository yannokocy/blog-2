import axios from "axios";

export default async function ViewPost({params}){
    const {id} = await params

    const response = await axios.get(`http://localhost:3333/api/posts/${id}`)

    const post = response.data.data

    console.log(post)

    return<main className='text-center max-w-[500px] mx-auto'>
        <h1 className='text-xl font-bold my-10'>{post?.title}</h1>
        <span>{post.author}</span>
        <blockquote className='italic text-[1rem]'>{post?.content}</blockquote>
    </main>
}
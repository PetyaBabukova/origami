import Post from '../Post';
import './Main.scss';

const Main = ({
    posts
}) => {
    // console.log(posts);
    return (
        <main className="main-container">
            <h1>Soooooooome Heading</h1>

            <div className="posts">
                {posts.map(x => 
                    <Post 
                        key={x.id} 
                        content={x.content}
                        author={x.author}
                    />
                )}
            </div>
        </main>
    );
}

export default Main;











// import Post from "../Post/Post";
// import './Main.scss';

// const Main = ({
//     posts
// }) => {
//     // console.log(posts);
//     return (
//         <main className="main-container">
//             <h1>Sooooooome Heading</h1>

//         <div className="posts">
//             {posts.map((x) =>
//             // <Post key={x._id}>{x.content}</Post> //content as a children
//             <Post 
//             // post = {x} // very comfortable if there are a lot authors, contents ...
//             key={x._id}
//             content = {x.content}
//             author = {x.author} 
//             />
//             )}
//         </div>
//         </main>
//     );
// }

// export default Main;
// // <main className="main"></main>

// // import {Fragment} from 'react'
//     // <Fragment>
//     //         <h1>Sooooooome heading</h1>
//     //         <p>some posts</p>

//     //     </Fragment>

//     // <> </> - empty tag is equal to <Fragment>


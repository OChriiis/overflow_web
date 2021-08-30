import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post, Profile } from "./styles.";
import { FaLinkedin } from "react-icons/fa";

    function Home() {

        const posts = [{
            author: {
                name: "Fulano",
            },
            created_at: "10/10/2021",
            title: "Este é um post sobre JS",
            description: "JS é uma linguagem de programação muito top",
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            gist: "https://github.com.br/",
            categories: [
                "JS", "Back-end", "Express"
            ],
            coments: [
                {
                    author: {
                        name: "Ciclano",
                    },
                    created_at: "11/10/2021",
                    description: "Realmente JS é muito legal"
                }
            ]
        }];

    return (
        <>
            <Header />
            <Main>
            <Profile>
                    <img src ="https://avatars.githubusercontent.com/u/74717575?v=4"/>
                    <div>
                        <strong>OChriiis</strong>
                    </div>
                    <div>
                        <strong>RA:20272523</strong>
                    </div>
                    <div>
                         <strong>contato.chris@outlook.com</strong>
                    </div>
                    <div>
                    <GistIcon/>
                    <FaLinkedin/>
                    </div>
                </Profile>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

   function PostCard({ post })  {
    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                    {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src={post.image} />
                <section>
                {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment} />)}
            </footer>
        </Post>
    );
}

export default Home;

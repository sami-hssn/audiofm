import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PostCard from "../components/postcard/PostCard";
import '../styles/index.css'

function TutorialsPage(){
    return(
        <div className="page tutorial-page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <h2>
                        Getting Started
                    </h2>
                    <PostCard 
                        {
                            ...{
                                title : "How to Make Your First Jersey Club Beat",
                                description: "Jersey Club is a genre currently trending and producers can't get enough of it! See how to make your first Jersey Club beat!",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true,
                                img : 'https://mixxed.com/blog/wp-content/uploads/2023/10/set-isolated-music-recording-studio-gear-icons-with-various-musical-instruments-modules-mixin_1284-15927.jpg',
                                alt: 'Instruments used in music production stacked on top of eachother.'
                            }
                        }
                    />
                    <PostCard 
                        {
                            ...{
                                title : "FL Studio Basics",
                                description: "FL Studio might be intimidating for beginners. Click here for the ultimate guide for beginners!",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true,
                                img : 'https://i.ytimg.com/vi/5cWQbH3llx8/maxresdefault.jpg',
                                alt: 'Logo for FL Studio, a music production application.'
                            }
                        }
                    />
                    <PostCard 
                        {
                            ...{
                                title : "Create Your Song of the Summer",
                                description: "How does one create the song of the summer? Here are some tips and tricks.",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true,
                                img : "https://assets.shop.loblaws.ca/products/20119813001/b3/en/front/20119813001_front_a06_@2.png",
                                alt: 'A pineapple.'
                            }
                        }
                    />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default TutorialsPage;
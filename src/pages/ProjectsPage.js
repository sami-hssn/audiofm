import CarouselWrapper from "../components/carouselwrapper/CarouselWrapper";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PostCard from "../components/postcard/PostCard";
import ProjectCard from "../components/projectcard/ProjectCard";
import SearchBar from "../components/search/SearchBar";
import '../styles/index.css'

function ProjectsPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <SearchBar title="Search for a post" />
                    <CarouselWrapper title="Latest Projects" isPost={ true }>
                        <ProjectCard 
                            img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                            alt="Man on a turn table." 
                            profileText="lshadow32"
                            profileDescription="Dark Shadow - S2024 Contest"
                        />
                        <ProjectCard 
                            img="https://www.candidcareer.com/blog12/images/blog_img_8.jpg?v=1" 
                            alt="Mixing Board." 
                            profileText="ilovemusic"
                            profileDescription="My newest track, Glassy Ocean"
                        />
                        <ProjectCard 
                            img="https://images.squarespace-cdn.com/content/v1/57f66a16e4fcb5154dc8ba39/1642521927854-VEQFXX1O3VMGS6GRF1UL/unsplash-image-l5XnUP7-M4w.jpg" 
                            alt="Man in dark room producing music." 
                            profileText="lameandcoolguy"
                            profileDescription="Lonely - OUT DECEMBER 23RD!"
                        />
                        <ProjectCard 
                            img="https://musictech.com/wp-content/uploads/2020/01/music-production-tips-from-the-pros@2000x1500.jpg" 
                            alt="A music producer's setup." 
                            profileText="daln"
                            profileDescription="What if Nettspend was a K-Pop Artist?"
                        />
                    </CarouselWrapper>
                    <PostCard 
                        {
                            ...{
                                title : "S2024 Contest Submission",
                                description: "This is my submission for the Summer 2024 contest in which we were tasked to produce a song using less than 5 instruments.",
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
                                title : "Heart Attack - Country Mix",
                                description: "What if Chuu from Loona was a country star? Check this out.",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true,
                                img : 'https://static.wikia.nocookie.net/loonatheworld/images/7/7a/%2B%2B_Promotional_Picture_Chuu.png/',
                                alt: 'Chuu from Loona'

                            }
                        }
                    />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ProjectsPage;
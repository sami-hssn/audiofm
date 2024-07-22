import CarouselWrapper from "../components/carouselwrapper/CarouselWrapper";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import ProfileSection from "../components/profilesection/ProfileSection";
import ProjectCard from "../components/projectcard/ProjectCard";
import Poll from "../components/poll/Poll";

export default function ProfilePage () {

    return (

        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <ProfileSection />
                    <Poll title="What is your favourite type of music?"/>
                    <CarouselWrapper title="Projects" isPost={ true }>
                        <ProjectCard 
                            img="https://pbs.twimg.com/media/GO8XcsfX0AAcrdQ?format=jpg&name=4096x4096" 
                            alt="Five girls with a cross on their heads." 
                            profileText="asmith32"
                            profileDescription="Virtual Angel - Jersey Club Mix"
                        />
                        <ProjectCard 
                            img="https://musictech.com/wp-content/uploads/2020/01/music-production-tips-from-the-pros@2000x1500.jpg" 
                            alt="A music producer's setup." 
                            profileText="asmith32"
                            profileDescription="S2024 Prod Contest Entry - Supernova"
                        />
                        <ProjectCard 
                            img="https://assets.teenvogue.com/photos/64b994a5d5b19e1b7270f417/16:9/w_2560%2Cc_limit/1_SY_4247_SY_NJ.jpg" 
                            alt="Five girls sitting on the grass. The K-Pop girl group New Jeans." 
                            profileText="asmith32"
                            profileDescription="Super Shy but it's even more shy."
                        />
                        <ProjectCard 
                            img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                            alt="A music producer's setup." 
                            profileText="asmith32"
                            profileDescription="Male Disc Jockey."
                        />
                    </CarouselWrapper>
                    <CarouselWrapper title="Collaborations" isPost={ true }>
                    <ProjectCard 
                            img="https://m.media-amazon.com/images/M/MV5BZWZjYzI0ZGItNDY5Yy00MzAzLTgxMzEtOGRmZTI4ZjA0OTY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg" 
                            alt="Stan from South Park" 
                            profileText="asmith32, stanmarsh"
                            profileDescription="South Park - Trap Mix"
                        />
                        <ProjectCard 
                            img="https://www.blog.tvrepairpune.com/wp-content/uploads/2022/11/chuu-loona-flip-that-4k-wallpaper-scaled.jpg" 
                            alt="Chuu from Loona." 
                            profileText="asmith32, chuucandoit"
                            profileDescription="Howl x Strawberry Rush"
                        />
                        <ProjectCard 
                            img="https://musictech.com/wp-content/uploads/2020/01/music-production-tips-from-the-pros@2000x1500.jpg" 
                            alt="A music producer's setup." 
                            profileText="asmith32, gypsyrose"
                            profileDescription="A Certain Diss Track"
                        />
                        <ProjectCard 
                            img="https://static.playhop.com/images/1d5d5_11385414_6c466/96fada8ff/2a0000018d9bf3a6_db853ca/a54cc27b0d0643586656_e86dc8/default526x314" 
                            alt="A chicken nugget with a sly face." 
                            profileText="asmith32, omeganugget"
                            profileDescription="Gegagedigadago Mix"
                        />
                        
                    </CarouselWrapper>
                </div>
                <Footer />
            </div>
        </div>

    );

}
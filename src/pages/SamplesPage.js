import CarouselWrapper from "../components/carouselwrapper/CarouselWrapper";
import Feature from "../components/feature/Feature";
import FeatureTwo from "../components/featuretwo/FeatureTwo";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/search/SearchBar";
import '../styles/index.css'

function SamplesPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <SearchBar title="Discover samples for your music" />
                    <CarouselWrapper title="New releases">
                        <Feature img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                        alt="Male Disc Jockey, sample pack is called 'Bounce Mix 1'"/>
                        <Feature img="https://i5.walmartimages.ca/images/Enlarge/_41/393/41393.jpg" 
                        alt="A green apple, sample pack is called 'Apple - Charli XCX'"/>
                        <Feature img="https://cdns-images.dzcdn.net/images/cover/067c480cd5c57ed595461994e6264650/1900x1900-000000-80-0-0.jpg" 
                        alt="A young teenage boy, sample pack is 'Nettspend - 2024 Freestyle'"/>
                        <Feature img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                        alt="Male Disc Jockey, sample pack is called 'Bounce Mix 2'"/>
                    </CarouselWrapper>
                    <CarouselWrapper title="Trending">
                        <Feature img="https://cdns-images.dzcdn.net/images/cover/067c480cd5c57ed595461994e6264650/1900x1900-000000-80-0-0.jpg" 
                        alt="A young teenage boy, sample pack is 'Nettspend - 2024 Freestyle'"/>
                        <Feature img="https://static.wikia.nocookie.net/loonatheworld/images/7/7a/%2B%2B_Promotional_Picture_Chuu.png/" 
                        alt="A teenaged girl, Chuu from Loona, sample pack is 'Hi High - Loona'"/>
                        <Feature img="https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/2/2/227217.jpg" 
                        alt="A drum kit."/>
                        <Feature img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                        alt="Male Disc Jockey, sample pack is called 'Bounce Mix 1'"/>
                    </CarouselWrapper>
                   
                    <CarouselWrapper title="Loops">
                        <Feature img="https://i.scdn.co/image/ab67616d0000b273b278c6fdc2dd765edc654ff1" 
                        alt="Yves from Loona."/>
                        <Feature img="https://m.media-amazon.com/images/M/MV5BZWZjYzI0ZGItNDY5Yy00MzAzLTgxMzEtOGRmZTI4ZjA0OTY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg" 
                        alt="Stan from South Park"/>
                        <Feature img="https://lh3.googleusercontent.com/Sk-qk0u9mZ1QWBDazMJdzLWVic1TSa7TWZYC8_-FUtkUDyy0Vg61zHZlJs88ejYy3o60GRbmSDTOUm8w=w544-h544-l90-rj" 
                        alt="New Jeans How Sweet Album Cover"/>
                        <Feature img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                        alt="Male Disc Jockey, sample pack is called 'Loop 2'"/>
                    </CarouselWrapper>
                    <CarouselWrapper title="Drum Kits">
                        <Feature img="https://articles.roland.com/wp-content/uploads/2022/02/USED_TD-07KVX-12-scaled.jpg" 
                        alt="A man playing the drums."/>
                        <Feature img="https://m.media-amazon.com/images/I/71iWUZ-dj3L._AC_UF1000,1000_QL80_.jpg" 
                        alt="Bongos."/>
                        <Feature img="https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/2/2/227217.jpg" 
                        alt="A drum kit."/>
                        <Feature img="https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/2/2/227217.jpg" 
                        alt="A drum kit."/>
                    </CarouselWrapper>

                    <CarouselWrapper title="Synths">
                        <Feature img="https://static.wikia.nocookie.net/witchers/images/4/49/Supernatural_Cover.jpg/" 
                        alt="A rainbow flower with a smiling face."/>
                        <Feature img="https://www.ballantines.com/cdn-cgi/image/format=auto%2Cwidth=2000/https://www.ballantines.com/wp-content/uploads/2021/08/seth-troxler-true-music-ballantines-boiler-room-3-new.jpeg" 
                        alt="Male Disc Jockey."/>
                        <Feature img="https://assets.shop.loblaws.ca/products/20119813001/b3/en/front/20119813001_front_a06_@2.png" 
                        alt="A pineapple."/>
                        <Feature img="https://i.pinimg.com/236x/61/38/62/6138625fadd1f4a57dc5b1eb773ecf4d.jpg" 
                        alt="Woodstock, a bird from the Charlie Brown Peanuts series."/>
                    </CarouselWrapper>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default SamplesPage;
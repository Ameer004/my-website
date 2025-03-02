import Layout from '../components/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Anime() {
  return (
    <Layout>
      <div className="bg-pink-500 py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl mb-4 text-white">My Favorite Anime</h1>
          <Slider {...settings}>
            <div>
              <img src="/anime1.jpg" alt="Anime 1" className="w-full h-64 object-cover" />
              <p className="text-white mt-2"><pre>
Hell’s Paradise | Jigokuraku

〄 Genres : Action, Adventure, Mystery, Supernatural
〄 Type : Series
〄 Average Rating : 80
〄 Status : Returning Series
〄 Runtime : 24 minutes
〄 No of episodes : 13


〄 Synopsis : The Edo period is nearing its end. Gabimaru, a shinobi formerly known as the strongest in Iwagakure who is now a death row convict, is told that he will be acquitted and set free if he can bring back the Elixir of Life from an island that is rumored to be the Buddhist pure land Sukhavati. In hopes of reuniting with his beloved wife, Gabimaru heads to the island along with the executioner Yamada Asaemon Sagiri. Upon arriving there, they encounter other death row convicts in search of the Elixir of Life... as well as a host of unknown creatures, eerie manmade statues, and the hermits who rule the island. </pre></p>
            </div>
            <div>
              <img src="/anime2.jpg" alt="Anime 2" className="w-full h-64 object-cover" />
              <p className="text-white mt-2">A heartwarming story with beautiful animation.</p>
            </div>
          </Slider>
        </div>
      </div>
    </Layout>
  );
}
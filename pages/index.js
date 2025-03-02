import Layout from '../components/Layout';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <Layout>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(/anime-background.jpg)' }}
      >
        <div className="text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl mb-4">
            <TypeAnimation sequence={['Welcome to my world!']} speed={50} />
          </h1>
          <p className="text-xl md:text-2xl">I love coding, pentesting, anime and leather works.</p>
        </div>
      </div>
    </Layout>
  );
}
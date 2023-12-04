/*import './globals.css'
import AppAppBar from './modules/views/AppAppBar';

export default function Landing() {
  return (
    <>
    <react.fragment>
      <AppAppBar />
    </react.fragment>
    <h1>Hello World</h1>
    </>
  )
}*/
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Next.js!</h1>
      {/* Konten halaman utama lainnya */}
    </div>
  );
};

export default Home;

import Navbar from '../components/navbar';
import ImageGallary from '../components/ImageGallary';
import UploadForm from '../components/UploadForm';


const Home = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar />
      <UploadForm />
      <ImageGallary />
    </div>
  )
}

export default Home
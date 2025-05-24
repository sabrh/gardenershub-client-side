import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Lottie animationData={loadingAnimation} loop={true} className="w-64 h-64" />
    </div>
  )
};

export default Loader;
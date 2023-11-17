import Lottie from 'lottie-react';
import loading from '../../../public/loading.json'
const Loading = () => {
  return (
    <div className='flex justify-center items-center '>
      <Lottie animationData={loading}></Lottie>
    </div>
  );
};
export default Loading;
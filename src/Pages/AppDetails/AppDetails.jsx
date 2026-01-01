import { Download, LucideBedSingle, Star, ThumbsUp } from 'lucide-react';
import { useLoaderData, useParams } from 'react-router';
import BarChart from './Chart';
import Description from './Description';
import { addToStoredDB } from '../../Utility/addToDB';

const AppDetails = () => {
    const {id} = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id === appId)
    const {image,size, title,downloads,ratingAvg,companyName,reviews}= singleApp;

    const handleInstall = (id)=>{
        addToStoredDB(id)
    }

    return (
        <div className='bg-[#D2D2D2]'>
            <div className='max-w-[1200px] mx-auto pt-20'>
            <div className='flex gap-10 items-center'>
                <img className='h-[350px] w-[350px]' src={image} alt="" />
            <div>
                <h1 className='font-bold text-3xl mb-2'>{title}</h1>
                <p className='font-semibold text-xl'>Developed by <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                <hr className='my-6 text-gray-400' />
                <div className='flex justify-between gap-8'>
                    <div>
                        <Download className='mb-2 text-[#00D390]'></Download>
                        <p className='mb-2'>Downloads</p>
                        <h1 className='font-extrabold text-4xl'>{downloads}</h1>
                    </div>
                    <div>
                        <Star className='mb-2 text-[#FF8811]'></Star>
                        <p className='mb-2'>Average Ratings</p>
                        <h1 className='font-extrabold text-4xl'>{ratingAvg}</h1>
                    </div>
                    <div>
                        <ThumbsUp className='mb-2 rounded-md text-white p-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[35px] w-[35px]'></ThumbsUp>
                        <p className='mb-2'>Total Reviews</p>
                        <h1 className='font-extrabold text-4xl'>{reviews}</h1>
                    </div>
                </div>
                <button onClick={()=>handleInstall(id)} className='btn mt-6 bg-[#00D390] text-white'>Install Now ({size} MB)</button>
            </div>
            </div>
            <div>
                <hr className='my-10 text-gray-400' />
            </div>
            <BarChart singleApp={singleApp}></BarChart>
            <Description singleApp={singleApp}></Description>
        </div>
        </div>
    );
};

export default AppDetails;
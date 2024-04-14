import {Helmet} from 'react-helmet';
const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-10">
                <h1 className="text-3xl font-bold text-center">Gallery</h1>
                <p className='text-center mt-4'>Explore our captivating gallery, where every image tells a story and every moment is frozen in time. <br /> Immerse yourself in a visual journey that transcends boundaries and ignites the imagination.</p>
                <div  data-aos="zoom-out" className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img
                        src="https://i.ibb.co/thQC3pg/banner1.jpg"
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/tsS6DVt/home-2.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/xXN1dtY/home3.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/gZNHrwk/banner5.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/Xs2p1tR/home6.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/RzL824X/home5.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/qNfZY06/home1.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/gZNHrwk/banner5.jpg"/>
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co/xSPYVZ6/banner6.jpg"/>
                    <img
                        src="https://i.ibb.co/x5bYQWn/banner4.jpg"
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"/>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
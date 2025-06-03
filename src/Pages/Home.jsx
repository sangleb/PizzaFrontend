import PizzaImg from '../assets/Images/pizza.png'
import PizzaMakingImg from '../assets/Images/PizaaMaking.jpeg'
import { BadgeCheckOutline } from '../Components/Icons/BadgeCheckIcom'
import { CartIcon } from '../Components/Icons/CartIcon';
import { EnjoyFood } from '../Components/Icons/EnjoyFood';
import { PickupFoodIcon } from '../Components/Icons/PickupFoodIcon';
function Home(){
    return(
        <div>
            {/* Hero Section */}
            <section 
                className="flex flex-col-reverse justify-center items-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">
                            Enjoy the Slice ... {' '}
                        </h1>
                        <h1>
                            😋👌
                        </h1>
                    </div>
                    <p 
                        className="pb-4 text-gray-500 font-semibold">
                            Your Favorite Pizza, Just a Click Away...
                            From Our Oven to Your Doorstep
                    </p>
                    <button 
                        className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 justify-center hover:cursor-pointer"
                    >
                        Order Now
                    </button>                    
                </div>
                <div>
                    <img src={PizzaImg} alt="pizza image" width={500} height={500} className='rounded-lg' />
                </div>
            </section>

            {/* Service section */}

            <section className='py-4 mt-6 bg-gradient-to-r bg-amber-50 to-orange-300'>
                <div className='container flex flex-col md:flex-row'>
                    <div className='flex flex-col items-center justify-center rounded-lg lg:w-1/2'>
                        <img 
                            src={PizzaMakingImg} 
                            alt="Pizza Making Image" 
                            width={500}
                            className='rounded-lg'
                        />
                    </div>

                    <div className='flex flex-col flex-wrap text-center lg:w-1/2 lg:pl-12 lg:text-left'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <div>
                                <h2 
                                    className='mb-2 text-4xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text'>
                                    Cooked by the best chef
                                </h2>
                                <p className='text-base leading-relaxed text-[#6B7280]'>
                                    There are many benifits regarding to that but main ones are: 
                                </p>
                            </div>
                        </div>
                        <div className='w-full p-1'>
                            <div className='flex items-center h-full p-2 text-2xl rounded text-[#F38339]'>
                                <BadgeCheckOutline className='mr-4 w-10 h-10'/>
                                <span className='font-bold title-font'>Perfect Taste</span>
                            </div>
                        </div>
                        <div className='w-full p-1'> 
                            <div className='flex items-center h-full p-2 text-2xl rounded text-[#F38339]'>
                                <BadgeCheckOutline className='mr-4 w-10 h-10'/>
                                <span className='font-bold title-font'>Food Hygene Guaranteed</span>
                            </div>
                        </div>
                        <div className='w-full p-1'>
                            <div className='flex items-center h-full p-2 text-2xl rounded text-[#F38339]'>
                                <BadgeCheckOutline className='mr-4 w-10 h-10'/>
                                <span className='font-bold title-font'>Taste with love and care</span>
                            </div>
                        </div>

                        <div className='px-5 py-4 mx-auto'>
                            <div className='flex justify-center py-4'>
                                <div className='inline-flex w-16 h-1 bg-yellow-500 rounded-full'></div>
                            </div>
                            <div className='flex flex-wrap space-y-6 md:space-y-0'>
                                <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                                    <div className='inline-flex items-center justify-center flex-shrink-0 h-20 w-20 mb-5 bg-yellow-100 rounded-full'>
                                        <CartIcon className="h-15 w-15 hover:cursor-pointer"/>
                                    </div>
                                    <div className='flex-grow'>
                                        <h2 className='mb-3 text-lg text-gray-900 title-font font-bold'>
                                            Order_Food
                                        </h2>
                                        <p className='text-base leading-relaxed' >As easy as 1, 2, 3..
                                            <br />Select your pizza and get your order delivered</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                                    <div className='inline-flex items-center justify-center flex-shrink-0 h-20 w-20 mb-5 bg-yellow-100 rounded-full'>
                                        <PickupFoodIcon className="h-15 w-15 hover:cursor-pointer"/>
                                    </div>
                                    <div className='flex-grow'>
                                        <h2 className='mb-3 text-lg text-gray-900 title-font font-bold'>
                                            Pickup_food
                                        </h2>
                                        <p className='text-base leading-relaxed' >Pick-up your order from nearest store or get it delivered at your doorstep</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                                    <div className='inline-flex items-center justify-center flex-shrink-0 h-20 w-20 mb-5 bg-yellow-100 rounded-full'>
                                        <EnjoyFood className="h-15 w-15 hover:cursor-pointer"/>
                                    </div>
                                    <div className='flex-grow'>
                                        <h2 className='mb-3 text-lg text-gray-900 title-font font-bold'>
                                            Enjoy_Food
                                        </h2>
                                        <p className='text-base leading-relaxed' >As soon as you get your order, enjoy the delicious Pizza  with your loved ones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
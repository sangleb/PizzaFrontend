import PizzaImg from '../assets/Images/pizza.png'
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
                        className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 justify-center"
                    >
                        Order Now
                    </button>                    
                </div>
                <div>
                    <img src={PizzaImg} alt="pizza image" width={500} height={500} className='rounded-lg' />
                </div>
            </section>
        </div>
    )
}

export default Home;
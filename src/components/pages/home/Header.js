import hello from '../../../assets/hello.png'


const Header = () => {
    return (
        <div className="grid grid-cols-12 mt-5 mb-10 justify-center">
            {/* image */}
            <div className="col-span-6 flex flex-col mx-auto py-10">
                <span className="text-5xl font-medium mb-16">Hello World!</span>
                <img src={hello} className="w-[500px] h-[200px]" />
            </div>
            {/* image */}


            {/* list */}
            <div className="col-span-6 grid grid-cols-2 gap-6 px-20 py-5" >
                <div className='px-3 py-5 rounded-lg border-[3px] border-gray-500 hover:border-black' onClick={() => console.log("clicked")}>
                    <div className='w-full flex flex-col '>
                        <span className=''>
                            Lorem Ipsum
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 items-end" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='px-3 py-5 rounded-lg border-[3px] border-gray-500 hover:border-black' onClick={() => console.log("clicked")}>
                    <div className='w-full flex flex-col '>
                        <span>
                            Lorem Ipsum
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 items-end" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='px-3 py-5 rounded-lg border-[3px] border-gray-500 hover:border-black' onClick={() => console.log("clicked")}>
                    <div className='w-full flex flex-col '>
                        <span>
                            Lorem Ipsum
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 items-end" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='px-3 py-5 rounded-lg border-[3px] border-gray-500 hover:border-black' onClick={() => console.log("clicked")}>
                    <div className='w-full flex flex-col '>
                        <span>
                            Lorem Ipsum
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 items-end" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* list */}
        </div>
    )
}

export default Header
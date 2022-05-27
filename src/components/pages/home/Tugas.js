import task from '../../../assets/task.png'

const Tugas = () => {
    return (
        <div className="mx-auto px-20 flex flex-col gap-8 mb-10">
            <span className="mx-14  text-xl">Tugas</span>
            <div className="w-full flex flex-col items-center py-48 border-4 border-gray-500 rounded-lg">
                <img src={task} className="w-40"/>
                <span className='text-gray-600'>
                    tidak ada tugas untuk saat ini.
                </span>
            </div>
        </div>
    )
}

export default Tugas
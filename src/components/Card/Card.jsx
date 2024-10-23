

const Card = ({ data }) => {
    return (
        <div className="bg-zinc-50 cursor-pointer w-56 h-72 rounded-lg shadow-xl p-3">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img src={data.image} alt={data.description} className='w-full h-full object-cover rounded-lg' />
                <div className="absolute top-0 right-0 flex justify-center items-center text-yellow-800 shadow-lg bg-zinc-50 w-8 h-8 rounded-full m-2 p-1 font-bold">
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.name}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export default Card
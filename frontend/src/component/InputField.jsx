
export const InputField = ({ label, inputProps, onChange, value }) => {
    return (
        <div className='flex flex-col'>
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2'>{label}</label>
            <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
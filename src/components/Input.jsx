import { useState } from 'React'

function Input({ type, title, id }) {

    return (
		<label
			htmlFor={id}
			className='group w-full relative flex items-center py-3'>
			<input
				type={type}
				className='peer outline-none w-full rounded-md border-2 border-solid border-slate-200 p-2 focus:border-blue-500 group-hover:border-blue-500 transition duration-200 ease-in [&:not(:placeholder-shown)]:border-blue-500'
				id={id}
				placeholder=' '
			/>
			<span className='absolute left-2 peer-focus:text-sm peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-blue-500 peer-[:not(:placeholder-shown)]:text-sm block bg-white p-[1px] transition duration-300 ease-linear cursor-text'>
				{title}
			</span>
		</label>
	);
}

export default Input

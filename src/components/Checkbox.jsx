function Checkbox ({id, title, name}) {
    return (
        <label
				htmlFor={id}
				className='inline-block'>
				<input
					type='checkbox'
					name={name}
					id={id}
					className='peer hidden'
				/>
				<span className='pl-8 py-2 pr-2 text-sm before:w-5 before:h-5 before:rounded-md before:border-2  before:border-solid before:border-slate-200 before:hover:border-blue-500 before:peer-checked:bg-blue-500 before:peer-checked:border-blue-500 before:absolute before:left-2 cursor-pointer flex items-center relative before:transition before:duration-150 before:ease-in after:w-3 after:h-2 after:absolute after:left-3 after:-translate-y-[2px] after:-rotate-45 after:border-b-2 after:border-l-2 after:border-solid after:border-white'>
					{title}
				</span>
			</label>
    )
}

export default Checkbox

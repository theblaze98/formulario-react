
function evento(e) {
    e.preventDefault()
}
function Button({title, id}) {
    return (
        <button type="submit" onClick={evento}  id={id} className="w-full rounded-md bg-blue-500 text-white font-medium p-2 hover:bg-blue-400 active:bg-blue-600 transition duration-150 ease-in">
            <span>{title}</span>
        </button>
    )
}

export default Button

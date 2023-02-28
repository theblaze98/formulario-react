import Input from './components/Input'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Button from './components/Button'

function App() {
	return (
		<div className='w-full min-h-screen bg-fondo bg-cover flex  justify-center md:justify-start items-center'>
			<form
				action=''
				class='lg:w-1/3 md:w-1/2 p-5 md:min-h-screen w-11/12 bg-white shadow-lg shadow-slate-800'>
				<div className='logo w-full py-5 mt-16'>
					<h2 className='text-4xl font-medium text-center text-blue-500'>
						Registrarse
					</h2>
					<a
						href='#'
						className='text-sm font-regular text-slate-800 hover:text-blue-500 mt-5 text-center block w-full'>
						Ya tienes una cuenta?
					</a>
				</div>
				<Input
					type='text'
					title='Nombre'
					id='nombre'
				/>
				<Input
					type='email'
					title='Correo'
					id='correo'
				/>
				<Input
					type='password'
					title='Contraseña'
					id='pass'
				/>
				<div>
					<Radio
						title='Hombre'
						name='genero'
						id='hombre'
					/>
					<Radio
						title='Mujer'
						name='genero'
						id='mujer'
					/>
				</div>

				<div className='mb-3'>
					<Checkbox
						title='Acepto los terminos y condiciones'
						name='terminos'
						id='terminos'
					/>
				</div>
        <Button title="Iniciar Sesion" id="login" />
			</form>
		</div>
	)
}

export default App

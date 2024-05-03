import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import Routers from './router/Router'

const App = () => {
	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
				transition={Slide}
			/>
			<Routers />
		</>
	)
}

export default App

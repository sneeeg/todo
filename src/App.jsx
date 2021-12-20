import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from './providers/ThemeProvider'
import ToDo from './ToDo/Todoshka'

const App = () => (
	<ThemeProvider>
		<Layout>
			<ToDo />
		</Layout>
	</ThemeProvider>
)

export default App

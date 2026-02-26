import { ThemePicker } from '@trenaryja/ui'

export default function Home() {
	return (
		<main className='grid h-screen place-items-center content-center gap-4'>
			<h1 className='text-4xl font-bold'>Hello World</h1>
			<ThemePicker />
		</main>
	)
}

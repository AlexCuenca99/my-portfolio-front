import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<ThemeProvider attribute="class">
			<Layout>
				<AnimatePresence mode="wait">
					<motion.div key={router.route} className="h-full">
						<Transition />
						<Component {...pageProps} />;
					</motion.div>
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;

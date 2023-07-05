import { useTheme } from 'next-themes';

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	if (currentTheme == 'dark') {
		return (
			<button onClick={() => setTheme('light')}>Switch to light</button>
		);
	} else {
		return <button onClick={() => setTheme('dark')}>Switch to dark</button>;
	}
	return <header>Header</header>;
};

export default Header;

import { THEME } from '../utils/constants';

export function setTheme(theme) {
	localStorage.setItem(THEME, theme);
}

export function getTheme() {
	localStorage.getItem(THEME);
}

export function removeTheme() {
	localStorage.removeItem(THEME);
}

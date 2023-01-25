// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

const today = new Date();

export const SITE_TITLE = 'Hans5958';
export const SITE_DESCRIPTION = 'The website of Hans5958.'
export const SITE_AUTHOR = 'Hans5958'
export const SITE_REPOSITORY = 'https://github.com/Hans5958/hans5958.github.io'
export const SITE_TWITTER = 'Hans5958'
export const COPYRIGHT_YEAR = today.getFullYear()
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

export interface BaseProps {
	title?: string;
	description?: string;
	coverSrc?: string;
	coverAlt?: string;
	noAnalytics?: boolean;
}
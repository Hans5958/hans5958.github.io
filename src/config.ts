import childProcess from "node:child_process";

const today = new Date();

export const SITE_TITLE = 'Hans5958';
export const SITE_DESCRIPTION = 'The website of Hans5958.'
export const SITE_AUTHOR = 'Hans5958'
export const SITE_REPOSITORY = 'https://github.com/Hans5958/hans5958.github.io'
export const SITE_TWITTER = '@Hans5958'
export const SITE_MASTODON = '@Hans5958@mastodon.social'

export const COPYRIGHT_YEAR = today.getFullYear()
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

export const COMMIT_HASH = childProcess.execSync('git rev-parse HEAD')?.toString().trim();
export const COMMIT_HASH_SHORT = childProcess.execSync('git rev-parse --short HEAD')?.toString().trim();

export interface BaseProps {
	title?: string;
	description?: string;
	coverSrc?: string;
	coverAlt?: string;
	noAnalytics?: boolean;
}
export type AccountData = {
	site: string
	username: string
	url?: string
	icon?: string
	iconStyle?: string
	iconImg?: string
	note: string
}

export type AccountSectionData = {
	sectionTitle: string
	sectionDescription?: string
	sections?: AccountSectionData[]
	accounts?: AccountData[]
}

export type AccountsData = AccountSectionData[]

export const accounts: AccountData = [
	{
		"sectionTitle": "Social Media",
		"accounts": [
			{
				"site": "Twitter",
				"username": "Hans5958",
				"url": "https://twitter.com/Hans5958",
				"icon": "logos:twitter"
			},
			{
				"site": "Twitter",
				"username": "Tweets5958",
				"url": "https://twitter.com/Tweets5958",
				"icon": "logos:twitter"
			},
			{
				"site": "YouTube",
				"username": "Hans5958",
				"url": "https://www.youtube.com/Hans5958",
				"icon": "simple-icons:youtube",
				"iconStyle": "color: red"
			},
			{
				"site": "YouTube",
				"username": "Channel5958",
				"url": "https://www.youtube.com/Channel5958",
				"icon": "simple-icons:youtube",
				"iconStyle": "color: red"
			},
			{
				"site": "Reddit",
				"username": "Hans5958_",
				"url": "https://reddit.com/u/Hans5958_",
				"icon": "logos:reddit-icon"
			},
			{
				"site": "Discord",
				"username": "hans5958",
				"url": "https://discord.com/users/279855717203050496",
				"icon": "logos:discord-icon",
				"note": "Not recommended for quick inquiries because you have to add me as a friend. I will accept it, but don't expect for it to be quick."
			},
			{
				"site": "Mastodon",
				"username": "Hans5958@mastodon.social",
				"url": "https://mastodon.social/@Hans5958",
				"icon": "logos:mastodon-icon"
			},
			{
				"site": "Mastodon",
				"username": "Toots5958@mastodon.social",
				"url": "https://mastodon.social/@Toots5958",
				"icon": "logos:mastodon-icon"
			},
			{
				"site": "Lemmy",
				"username": "Hans5958@lemmy.world",
				"url": "https://lemmy.world/u/Hans5958",
				"icon": "simple-icons:lemmy",
				"note": "Rarely used."
			},
			{
				"site": "Matrix",
				"username": "hans5958:matrix.org",
				"url": "https://matrix.to/#/@hans5958:matrix.org",
				"icon": "simple-icons:matrix"
			},
			{
				"site": "Instagram",
				"username": "hans5958",
				"url": "https://www.instagram.com/hans5958",
				"icon": "simple-icons:instagram"
			},
			{
				"site": "Bluesky",
				"username": "hans5958.bsky.social",
				"url": "https://bsky.app/profile/hans5958.bsky.social",
				"icon": "simple-icons:bluesky",
				"iconStyle": "color: #006aff",
				"note": "Rarely used in favor of Mastodon. Mastodon account is bridged on Hans5958.mastodon.social.ap.brid.gy."
			},
			{
				"site": "Telegram",
				"username": "Hans5958",
				"url": "https://t.me/Hans5958",
				"icon": "logos:telegram"
			},
			{
				"site": "Twitch",
				"username": "Hans5958_",
				"url": "https://twitch.tv/Hans5958_",
				"icon": "logos:twitch"
			},
		]
	},
	{
		"sectionTitle": "Software Development",
		"accounts": [
			{
				"site": "GitHub",
				"username": "Hans5958",
				"url": "https://github.com/Hans5958",
				"icon": "simple-icons:github"
			},
			{
				"site": "GitHub",
				"username": "Auto5958",
				"url": "https://github.com/Auto5958",
				"icon": "simple-icons:github"
			},
			{
				"site": "GitLab",
				"username": "Hans5958",
				"url": "https://gitlab.com/Hans5958",
				"icon": "logos:gitlab-icon"
			},
			{
				"site": "GitLab",
				"username": "Auto5958",
				"url": "https://gitlab.com/Auto5958",
				"icon": "logos:gitlab-icon"
			},
			{
				"site": "Scratch",
				"username": "Hans5958",
				"url": "https://scratch.mit.edu/users/Hans5958",
				"icon": "simple-icons:scratch",
				"iconStyle": "color: #FF7B26"
			},
			{
				"site": "Scratch",
				"username": "Scratcher5958",
				"url": "https://scratch.mit.edu/users/Scratcher5958",
				"icon": "simple-icons:scratch",
				"iconStyle": "color: #FF7B26"
			}
		]
	},
	{
		"sectionTitle": "Gaming",
		"accounts": [
			{
				"site": "Steam",
				"username": "Hans5958",
				"url": "https://steamcommunity.com/id/Hans5958",
				"icon": "simple-icons:steam"
			},
			{
				"site": "Epic Games",
				"username": "Hans5958",
				"url": "",
				"icon": "simple-icons:epicgames"
			},
			{
				"site": "Xbox",
				"username": "Hans5958",
				"url": "https://account.xbox.com/en-US/Profile?gamerTag=Hans5958",
				"icon": "simple-icons:xbox",
				"iconStyle": "color: #107C10"
			},
			{
				"site": "EA",
				"username": "Hans5958",
				"url": "",
				"icon": "simple-icons:ea"
			},
			{
				"site": "Battle.net",
				"username": "Hans5958#3236",
				"url": "",
				"icon": "simple-icons:battledotnet",
				"iconStyle": "color: #148EFF"
			},
			{
				"site": "Minecraft",
				"username": "Hans5958",
				"url": "https://namemc.com/profile/Hans5958.1",
				"iconImg": "/assets/img/icons/minecraft.png"
			},
			{
				"site": "osu!",
				"username": "Hans5958",
				"url": "https://osu.ppy.sh/u/Hans5958",
				"icon": "simple-icons:osu"
			},
			{
				"site": "Roblox",
				"username": "Pixel5958",
				"url": "https://www.roblox.com/users/3581240125/profile",
				"icon": "simple-icons:roblox"
			},
			{
				"site": "TypeRacer",
				"username": "Hans5958",
				"url": "https://data.typeracer.com/pit/profile?user=hans5958",
				"iconImg": "/assets/img/icons/typeracer.svg"
			},
			{
				"site": "Monkeytype",
				"username": "Hans5958",
				"url": "https://monkeytype.com/profile/Hans5958",
				"icon": "simple-icons:monkeytype",
			},
			{
				"site": "Speedrun.com",
				"username": "Hans5958",
				"url": "https://www.speedrun.com/users/Hans5958",
				"iconImg": "/assets/img/icons/speedrun-com.svg"
			},
			{
				"site": "Pokémon Go",
				"username": "Hans5958",
				"url": "https://monkeytype.com/profile/Hans5958",
				"icon": "mdi:pokemon-go",
				"iconStyle": "color: #FF0000; transform: scale(1.2);",
				"note": "Contact me through other channels if you want to friend me."
			}
		]
	},
	{
		"sectionTitle": "Collaboration/Volunteering",
		"accounts": [
			{
				"site": "Wikipedia",
				"username": "Hans5958",
				"url": "https://meta.wikimedia.org/wiki/User:Hans5958",
				"icon": "simple-icons:wikipedia",
				"note": "Includes other Wikimedia projects such as Wikipedia, Wikidata, and Wikimedia Commons. Common edited wikis are English Wikipedia, Indonesian Wikipedia, and Wikidata."
			},
			{
				"site": "Wikipedia",
				"username": "Bot5958",
				"url": "https://meta.wikimedia.org/wiki/User:Bot5958",
				"icon": "simple-icons:wikipedia",
				"note": "For sanctioned, automated edits. See profile to see covered wikis."
			},
			{
				"site": "Fandom",
				"username": "Hans5958",
				"url": "https://community.fandom.com/wiki/User:Hans5958",
				"icon": "simple-icons:fandom",
				"iconStyle": "color: #FA005A",
				"note": "Covering all Fandom wikis."
			},
			{
				"site": "Fandom",
				"username": "Bot5958",
				"url": "https://community.fandom.com/wiki/User:Bot5958",
				"icon": "simple-icons:fandom",
				"iconStyle": "color: #FA005A",
				"note": "For sanctioned, automated edits."
			},
			{
				"site": "ArchiveTeam",
				"username": "Hans5958",
				"url": "https://wiki.archiveteam.org/index.php/User:Hans5958",
				"iconImg": "https://wiki.archiveteam.org/images/7/76/Archiveteam1.png",
				"note": "Links to wiki user page. Same name used on the tracker and leaderboards."
			},
			{
				"site": "VocaDB",
				"username": "Hans5958",
				"url": "https://vocadb.net/Profile/Hans5958",
				"iconImg": "https://static.vocadb.net/img/favicon.ico",
			},
			{
				"site": "UtaiteDB",
				"username": "Hans5958",
				"url": "https://utaitedb.net/Profile/Hans5958",
				"iconImg": "https://static.utaitedb.net/img/favicon.ico",
			},
			{
				"site": "TouhouDB",
				"username": "Hans5958",
				"url": "https://touhoudb.com/Profile/Hans5958",
				"iconImg": "https://static.touhoudb.com/img/favicon.ico",
			},
			{
				"site": "Minecraft Wiki",
				"username": "Hans5958",
				"url": "https://minecraft.wiki/wiki/User:Hans5958",
				"iconImg": "https://minecraft.wiki/images/Wiki_textless.png?format=original",
				"iconStyle": "transform: scale(1.3);",
			},
			{
				"site": "SiIvaGunner Wiki",
				"username": "Hans5958",
				"url": "https://siivagunner.wiki/wiki/User:Hans5958",
				"iconImg": "/assets/img/icons/siivagunner-wiki.svg"
			},
		]
	},
	{
		"sectionTitle": "Other",
		"accounts": [
			{
				"site": "Keybase",
				"username": "hans5958",
				"url": "https://keybase.io/hans5958",
				"iconImg": "/assets/img/icons/keybase.svg"
			},
			{
				"site": "dev.to",
				"username": "hans5958",
				"url": "https://dev.to/hans5958",
				"icon": "simple-icons:devdotto"
			},
			{
				"site": "Last.fm",
				"username": "Hans5958",
				"url": "https://www.last.fm/user/Hans5958",
				"icon": "simple-icons:lastdotfm",
				"iconStyle": "color: #D51007"
			},
			{
				"site": "Trakt",
				"username": "Hans5958",
				"url": "https://trakt.tv/users/hans5958",
				"icon": "simple-icons:trakt",
				"iconStyle": "color: #ED1C24"
			}
		]
	}
]

export default accounts
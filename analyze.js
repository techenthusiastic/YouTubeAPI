const aa = {
	kind: "youtube#channelListResponse",
	etag: "kt3prdni5QvdIQ-eJnmR72MgHDo",
	pageInfo: { totalResults: 1, resultsPerPage: 5 },
	items: [
		{
			kind: "youtube#channel",
			etag: "BcXPJzpfsb6rCG9zGlS0oZFI4-U",
			id: "UCxfXzgHzHKiTnN1S2ze87Aw",
			snippet: {
				title: "CodeKaro",
				description: "",
				publishedAt: "2021-09-02T04:44:57.439646Z",
				thumbnails: {
					default: {
						url: "https://yt3.ggpht.com/ytc/AKedOLQtBkRYZOfjD9-j1k-Hb-WChd4QQPmlb7jocGhRsIQZJ4HAWK_XEORMiZEIbk_T=s88-c-k-c0x00ffffff-no-rj",
						width: 88,
						height: 88,
					},
					medium: {
						url: "https://yt3.ggpht.com/ytc/AKedOLQtBkRYZOfjD9-j1k-Hb-WChd4QQPmlb7jocGhRsIQZJ4HAWK_XEORMiZEIbk_T=s240-c-k-c0x00ffffff-no-rj",
						width: 240,
						height: 240,
					},
					high: {
						url: "https://yt3.ggpht.com/ytc/AKedOLQtBkRYZOfjD9-j1k-Hb-WChd4QQPmlb7jocGhRsIQZJ4HAWK_XEORMiZEIbk_T=s800-c-k-c0x00ffffff-no-rj",
						width: 800,
						height: 800,
					},
				},
				localized: { title: "CodeKaro", description: "" },
			},
			contentDetails: {
				relatedPlaylists: { likes: "LL", uploads: "UUxfXzgHzHKiTnN1S2ze87Aw" },
			},
			statistics: {
				viewCount: "0",
				subscriberCount: "0",
				hiddenSubscriberCount: false,
				videoCount: "1",
			},
			status: {
				privacyStatus: "public",
				isLinked: true,
				longUploadsStatus: "eligible",
			},
			brandingSettings: { channel: { title: "CodeKaro" } },
			contentOwnerDetails: {},
		},
	],
};
// getPlaylist
const bb = {
	total_Channels: 2,
	channels_Details: [
		{
			kind: "youtube#playlist",
			etag: "S6r-Q7L4qdQvZ8c-iNqtQmk5ZCA",
			id: "PL92sLJmzXG3z2mOLaLZG2-a1yY-0or_LF",
			snippet: {
				publishedAt: "2021-09-02T08:55:47Z",
				channelId: "UCxfXzgHzHKiTnN1S2ze87Aw",
				title: "PlayList2",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "CodeKaro",
				localized: { title: "PlayList2", description: "" },
			},
			status: { privacyStatus: "public" },
			contentDetails: { itemCount: 0 },
			player: {
				embedHtml:
					'<iframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL92sLJmzXG3z2mOLaLZG2-a1yY-0or_LF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			},
		},
		{
			kind: "youtube#playlist",
			etag: "ftwLUxnQA_njJ21W_IA0A9enHP0",
			id: "PL92sLJmzXG3wLo4JUgUKCGPc3lmfo1wrr",
			snippet: {
				publishedAt: "2021-09-02T06:35:14Z",
				channelId: "UCxfXzgHzHKiTnN1S2ze87Aw",
				title: "HeyPlayList",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/sddefault.jpg",
						width: 640,
						height: 480,
					},
				},
				channelTitle: "CodeKaro",
				localized: { title: "HeyPlayList", description: "" },
			},
			status: { privacyStatus: "public" },
			contentDetails: { itemCount: 1 },
			player: {
				embedHtml:
					'<iframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL92sLJmzXG3wLo4JUgUKCGPc3lmfo1wrr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			},
		},
	],
};
// getPlaylistItems
const c = {
	kind: "youtube#playlistItemListResponse",
	etag: "ObrSqt68h2RBCVwHIG5i2Q_dnz4",
	items: [
		{
			kind: "youtube#playlistItem",
			etag: "M5hpIX0_bc5YGW9iv1wiyWQpucc",
			id: "UEw5MnNMSm16WEczd0xvNEpVZ1VLQ0dQYzNsbWZvMXdyci41NkI0NEY2RDEwNTU3Q0M2",
			snippet: {
				publishedAt: "2021-09-02T06:35:39Z",
				channelId: "UCxfXzgHzHKiTnN1S2ze87Aw",
				title: "Screen Recording 01 09 2021 09 55 04 PM",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/sddefault.jpg",
						width: 640,
						height: 480,
					},
				},
				channelTitle: "CodeKaro",
				playlistId: "PL92sLJmzXG3wLo4JUgUKCGPc3lmfo1wrr",
				position: 0,
				resourceId: { kind: "youtube#video", videoId: "rnAlU_sA6hk" },
				videoOwnerChannelTitle: "CodeKaro",
				videoOwnerChannelId: "UCxfXzgHzHKiTnN1S2ze87Aw",
			},
			contentDetails: {
				videoId: "rnAlU_sA6hk",
				videoPublishedAt: "2021-09-02T06:34:03Z",
			},
			status: { privacyStatus: "public" },
		},
	],
	pageInfo: { totalResults: 1, resultsPerPage: 5 },
};
// getVideoData
const d = {
	kind: "youtube#videoListResponse",
	etag: "SVhEmQ-Dpro8ssifFdbLs830HdU",
	items: [
		{
			kind: "youtube#video",
			etag: "ofGxHcjIB5A46TcB6wdX0TJEqjs",
			id: "rnAlU_sA6hk",
			snippet: {
				publishedAt: "2021-09-02T06:34:03Z",
				channelId: "UCxfXzgHzHKiTnN1S2ze87Aw",
				title: "Screen Recording 01 09 2021 09 55 04 PM",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
					standard: {
						url: "https://i.ytimg.com/vi/rnAlU_sA6hk/sddefault.jpg",
						width: 640,
						height: 480,
					},
				},
				channelTitle: "CodeKaro",
				categoryId: "22",
				liveBroadcastContent: "none",
				localized: {
					title: "Screen Recording 01 09 2021 09 55 04 PM",
					description: "",
				},
			},
			contentDetails: {
				duration: "PT44S",
				dimension: "2d",
				definition: "hd",
				caption: "false",
				licensedContent: false,
				contentRating: {},
				projection: "rectangular",
				hasCustomThumbnail: false,
			},
			status: {
				uploadStatus: "processed",
				privacyStatus: "public",
				license: "youtube",
				embeddable: true,
				publicStatsViewable: true,
				madeForKids: true,
				selfDeclaredMadeForKids: true,
			},
			statistics: {
				viewCount: "2",
				likeCount: "1",
				dislikeCount: "0",
				favoriteCount: "0",
				commentCount: "0",
			},
			player: {
				embedHtml:
					'<iframe width="480" height="270" src="//www.youtube.com/embed/rnAlU_sA6hk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			},
			recordingDetails: {},
			fileDetails: {
				fileName: "Screen Recording (01-09-2021 09-55-04 PM).wmv",
				fileSize: "11898771",
				fileType: "video",
				container: "asf",
				videoStreams: [
					{
						widthPixels: 1364,
						heightPixels: 724,
						frameRateFps: 24,
						aspectRatio: 1.8839779005524862,
						codec: "wmv",
						bitrateBps: "2817004",
					},
				],
				audioStreams: [{ channelCount: 2, codec: "wma", bitrateBps: "127905" }],
				bitrateBps: "2944909",
			},
			processingDetails: {
				processingStatus: "succeeded",
				fileDetailsAvailability: "available",
				processingIssuesAvailability: "available",
				tagSuggestionsAvailability: "inProgress",
				editorSuggestionsAvailability: "inProgress",
				thumbnailsAvailability: "inProgress",
			},
			suggestions: {},
		},
	],
	pageInfo: { totalResults: 1, resultsPerPage: 1 },
};

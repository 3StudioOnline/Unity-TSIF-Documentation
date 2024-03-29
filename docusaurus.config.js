// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const url3StudioWebsite = "https://3studio.online";
const urlUnrealMarketplaceProduct_TSIF = "https://www.unrealengine.com/marketplace/en-US/product/b8a5ef2c915c4359b7e66d08a85d4c74";
const urlUnrealMarketplaceProduct_TSBC = "https://www.unrealengine.com/marketplace/en-US/product/fc42c8121e0d445f8887ed6962af796e";
const urlUnrealMarketplaceProduct_TSAI = "https://www.unrealengine.com/marketplace/en-US/product/a730dd3ff54a45db94120b4fa9cae124";
const urlUnityAssetStoreProduct_TSIF = "https://https://assetstore.unity.com/packages/slug/246687";
const urlDiscordInviteLink = "http://discord.3studio.online";
const urlGitHubRepository = "https://github.com/3StudioOnline/Unity-TSIF-Documentation";
const urlGitHubIssueTracker = `${urlGitHubRepository}/issues`;

const globalRemarkPlugins = [
    require('mdx-mermaid'),
    require('remark-math'),
    require('@akebifiky/remark-simple-plantuml'),
];

const globalRehypePlugins = [
    require('rehype-katex'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "3S Game Studio IPFS Plugin for Unity",
    tagline: "IPFS is a decentralized storage protocol, that allows you to upload, download and stream to memory any kind of files.",
    organizationName: "3StudioOnline", // Usually your GitHub org/user name.
    projectName: "Unity-TSIF-Documentation", // Usually your repo name.
    deploymentBranch: "gh-pages",

    url: "https://3StudioOnline.github.io",
    baseUrl: "/Unity-TSIF-Documentation/",

    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    plugins: [
        'docusaurus-plugin-sass',
        require.resolve("docusaurus-plugin-image-zoom"),
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: ({versionDocsDirPath, docPath}) =>
                        `${urlGitHubRepository}/edit/master/${versionDocsDirPath}/${docPath}`,
                    showLastUpdateTime: false,
                    includeCurrentVersion: false,
                    versions: {
                        "1.0.0": {
                            banner: "none",
                        },
                    },

                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                pages: {
                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                blog: false,

                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },

                // gtag: {
                //     trackingID: 'G-TODO',
                //     anonymizeIP: true,
                // }
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            navbar: {
                title: "3S Game Studio IPFS Plugin for Unity",
                logo: {
                    alt: "3S Game Studio IPFS Plugin Logo",
                    src: "img/logo-48.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "getting-started/introduction",
                        label: "Documentation",
                        position: "left",
                    },

                    {type: "docsVersionDropdown", position: "left"},

                    {to: "/changelog", label: "Changelog", position: "right"},

                    {to: "/roadmap", label: "Roadmap", position: "right"},

                    {
                        href: urlDiscordInviteLink,
                        label: "Discord",
                        position: "right",
                    },

                    {
                        href: urlGitHubIssueTracker,
                        label: "Issue Tracker",
                        position: "right",
                    },

                    {
                        href: urlGitHubRepository,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },

            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {to: "/docs/getting-started/introduction", label: "Getting Started"},

                            {to: "/changelog", label: "Changelog"},

                            {to: "/roadmap", label: "Roadmap"},
                        ],
                    },

                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: urlDiscordInviteLink,
                            },
                        ],
                    },

                    {
                        title: "Unreal Marketplace",
                        items: [
                            {
                                label: "IPFS Plugin",
                                href: urlUnrealMarketplaceProduct_TSIF,
                            },
                            {
                                label: "Blockchain Plugin",
                                href: urlUnrealMarketplaceProduct_TSBC,
                            },
                            {
                                label: "OpenAI Plugin",
                                href: urlUnrealMarketplaceProduct_TSAI,
                            },
                        ],
                    },

                    {
                        title: "Unity Asset Store",
                        items: [
                            {
                                label: "IPFS Plugin",
                                href: urlUnityAssetStoreProduct_TSIF,
                            },
                        ],
                    },

                    {
                        title: "More",
                        items: [
                            {
                                label: "3Studio",
                                href: url3StudioWebsite,
                            },

                            {
                                label: "GitHub",
                                href: urlGitHubRepository,
                            },

                            {
                                label: "Issue Tracker",
                                href: urlGitHubIssueTracker,
                            },
                        ],
                    },
                ],

                copyright: `Copyright © ${new Date().getFullYear()} 3Studio.online. All Rights Reserved.`,
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp'],
            },

            zoom: {
                selector: '.markdown :not(em) > img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    margin: 64,
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)',
                    }
                }
            }
        }),
};

module.exports = config;

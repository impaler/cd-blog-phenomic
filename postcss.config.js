module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#2a2a2a",
            colorPrimary: "#000",
            colorSecondaryDark: "#6e5884",
            colorSecondary: "#cd83ff",
            colorNeutralDark: "#111",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FBFCFC",
            colorText: "#fff",
            colorLinkText: "#99b7ff",
            colorLinkTextHover: "#adafff",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]

export const TemplateTabs = {
  navigators: {
    gzXCcqLL5sRqGSwASwV5u: {
      name: "TabNavigator",
      type: "Tab",
      id: "gzXCcqLL5sRqGSwASwV5u",
      screens: {
        "V-3FOB_Q-iVz9XXmehDFW": {
          component: { type: "View" },
          name: "Tab1",
          id: "V-3FOB_Q-iVz9XXmehDFW",
          headerShown: true,
          tabbarIcon: { icon: "view-dashboard", action: "toggleDrawer" },
          headerRight: {
            icon: "help-circle-outline",
            action: "navigate",
            payload: "Help",
          },
        },
        QIhcyMobiqYTVT8dI9Csp: {
          component: { type: "View" },
          name: "Tab2",
          id: "QIhcyMobiqYTVT8dI9Csp",
          headerShown: true,
          tabbarIcon: { icon: "format-list-numbered", action: "toggleDrawer" },
        },
        "boYNDSeHIPRhXgQz5MaO-": {
          component: { type: "View" },
          name: "Tab3",
          id: "boYNDSeHIPRhXgQz5MaO-",
          headerShown: true,
          tabbarIcon: { icon: "account", action: "toggleDrawer" },
        },
        "6Em6XP9FIxyWlZmI36nq5": {
          component: { type: "View" },
          name: "Tab4",
          id: "6Em6XP9FIxyWlZmI36nq5",
          headerShown: true,
          tabbarIcon: { icon: "magnify", action: "toggleDrawer" },
        },
      },
    },
    pZq3E0kDSJiCUcGiSK48M: {
      name: "RootStack",
      type: "Stack",
      id: "pZq3E0kDSJiCUcGiSK48M",
      screens: {
        "4JARyxIz22KsLFtC6Zmej": {
          component: {
            navigatorId: "gzXCcqLL5sRqGSwASwV5u",
            type: "Navigator",
          },
          name: "Tab",
          id: "4JARyxIz22KsLFtC6Zmej",
          headerShown: false,
        },
        MmBUC4sNvn7SiqUGTrG9E: {
          component: { type: "View" },
          name: "Help",
          id: "MmBUC4sNvn7SiqUGTrG9E",
          headerShown: true,
        },
      },
    },
  },
  rootId: "pZq3E0kDSJiCUcGiSK48M",
  inspector: {
    type: "Screen",
    screenId: "6Em6XP9FIxyWlZmI36nq5",
    navigatorId: "gzXCcqLL5sRqGSwASwV5u",
  },
  theme: {
    dark: false,
    roundness: 4,
    colors: {
      primary: "rgb(0, 122, 255)",
      accent: "#03dac4",
      background: "rgb(242, 242, 242)",
      surface: "#ffffff",
      error: "#B00020",
      text: "rgb(28, 28, 30)",
      onBackground: "#000000",
      onSurface: "#000000",
      disabled: "rgba(0, 0, 0, 0.26)",
      placeholder: "rgba(0, 0, 0, 0.54)",
      backdrop: "rgba(0, 0, 0, 0.5)",
      notification: "rgb(255, 59, 48)",
      card: "rgb(255, 255, 255)",
      border: "rgb(216, 216, 216)",
    },
    fonts: {
      regular: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "400",
      },
      medium: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "500",
      },
      light: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "300",
      },
      thin: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "100",
      },
    },
    animation: { scale: 1 },
  },
};

export const TemplateDrawer = {
  navigators: {
    XYEQbR2HDrwtLI39yOwQL: {
      name: "Drawer",
      type: "Drawer",
      id: "XYEQbR2HDrwtLI39yOwQL",
      screens: {
        x6xrM6FS8YNZliw3lqLG1: {
          component: { type: "View" },
          name: "DrawerPage1",
          id: "x6xrM6FS8YNZliw3lqLG1",
          headerShown: true,
          headerLeft: { icon: "menu", action: "toggleDrawer" },
          headerRight: {
            icon: "magnify",
            action: "navigate",
            payload: "Search",
          },
        },
        b0H89D2ECKz0rO1wdLgxn: {
          component: { type: "View" },
          name: "DrawerPage2",
          id: "b0H89D2ECKz0rO1wdLgxn",
          headerShown: true,
          headerLeft: { icon: "menu", action: "toggleDrawer" },
          headerRight: {
            icon: "account",
            action: "navigate",
            payload: "Account",
          },
        },
      },
    },
    H3Piyq4IIQvpEiSzB6lp8: {
      name: "Root",
      type: "Stack",
      id: "H3Piyq4IIQvpEiSzB6lp8",
      screens: {
        Ch_PgVmy0JEuWCwJgT8bF: {
          component: {
            navigatorId: "XYEQbR2HDrwtLI39yOwQL",
            type: "Navigator",
          },
          name: "DrawerScreen",
          id: "Ch_PgVmy0JEuWCwJgT8bF",
          headerShown: false,
        },
        "T6ZAL8Bh6_xchEdyi-msk": {
          component: { type: "View" },
          name: "Search",
          id: "T6ZAL8Bh6_xchEdyi-msk",
          headerShown: true,
        },
        CT5WWUsxhu9M_ApGPqaCN: {
          component: { type: "View" },
          name: "Account",
          id: "CT5WWUsxhu9M_ApGPqaCN",
          headerShown: true,
        },
      },
    },
  },
  rootId: "H3Piyq4IIQvpEiSzB6lp8",
  inspector: { type: "Theme" },
  theme: {
    dark: false,
    roundness: 4,
    colors: {
      primary: "rgb(0, 122, 255)",
      accent: "#03dac4",
      background: "rgb(242, 242, 242)",
      surface: "#ffffff",
      error: "#B00020",
      text: "rgb(28, 28, 30)",
      onBackground: "#000000",
      onSurface: "#000000",
      disabled: "rgba(0, 0, 0, 0.26)",
      placeholder: "rgba(0, 0, 0, 0.54)",
      backdrop: "rgba(0, 0, 0, 0.5)",
      notification: "rgb(255, 59, 48)",
      card: "rgb(255, 255, 255)",
      border: "rgb(216, 216, 216)",
    },
    fonts: {
      regular: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "400",
      },
      medium: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "500",
      },
      light: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "300",
      },
      thin: {
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: "100",
      },
    },
    animation: { scale: 1 },
  },
};

const Projects = {
  Tabs: TemplateTabs,
  Drawer: TemplateDrawer,
};

export default Projects;

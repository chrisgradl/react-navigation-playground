export const TemplateTabs = {
  navigators: {
    gzXCcqLL5sRqGSwASwV5u: {
      name: "RootNavigator",
      type: "Tab",
      id: "gzXCcqLL5sRqGSwASwV5u",
      screens: {
        "V-3FOB_Q-iVz9XXmehDFW": {
          component: {
            navigatorId: "YC_vR6V2Y9aCnlxNLZp1h",
            type: "Navigator",
          },
          name: "Tab1",
          id: "V-3FOB_Q-iVz9XXmehDFW",
          headerShown: true,
        },
        QIhcyMobiqYTVT8dI9Csp: {
          component: {
            navigatorId: "hXPy3eZW6H1y0Z3EtH4nq",
            type: "Navigator",
          },
          name: "Tab2",
          id: "QIhcyMobiqYTVT8dI9Csp",
          headerShown: true,
        },
        "boYNDSeHIPRhXgQz5MaO-": {
          component: {
            type: "View",
          },
          name: "Tab3",
          id: "boYNDSeHIPRhXgQz5MaO-",
          headerShown: true,
        },
      },
    },
    YC_vR6V2Y9aCnlxNLZp1h: {
      name: "StackTab1",
      type: "Stack",
      id: "YC_vR6V2Y9aCnlxNLZp1h",
      screens: {
        KpJIR6TIyfVT8qU6fHMrI: {
          component: {
            type: "View",
          },
          name: "Screen1",
          id: "KpJIR6TIyfVT8qU6fHMrI",
          headerShown: true,
          headerRight: {
            icon: "magnify",
            action: "navigate",
            payload: "SearchScreen",
          },
        },
        NHQVNqO_mjEPQDdpLhznD: {
          component: {
            type: "View",
          },
          name: "SearchScreen",
          id: "NHQVNqO_mjEPQDdpLhznD",
          headerShown: true,
        },
      },
    },
    hXPy3eZW6H1y0Z3EtH4nq: {
      name: "StackTab2",
      type: "Stack",
      id: "hXPy3eZW6H1y0Z3EtH4nq",
      screens: {
        ti5jwHcq_L2IzylplC7JO: {
          component: {
            type: "View",
          },
          name: "Screen2",
          id: "ti5jwHcq_L2IzylplC7JO",
          headerShown: true,
          headerLeft: {
            icon: "adjust",
            action: "navigate",
            payload: "Tab3",
          },
        },
        "hV1qhlB4UOPf-JzjtPAPY": {
          component: {
            type: "View",
          },
          name: "DetailScreen",
          id: "hV1qhlB4UOPf-JzjtPAPY",
          headerShown: true,
        },
      },
    },
  },
  rootId: "gzXCcqLL5sRqGSwASwV5u",
  inspector: {
    type: "Screen",
    screenId: "ti5jwHcq_L2IzylplC7JO",
    navigatorId: "hXPy3eZW6H1y0Z3EtH4nq",
  },
  theme: {
    dark: true,
    roundness: 4,
    colors: {
      primary: "rgb(10, 132, 255)",
      accent: "#03dac6",
      background: "rgb(1, 1, 1)",
      surface: "#121212",
      error: "#CF6679",
      text: "rgb(229, 229, 231)",
      onBackground: "#FFFFFF",
      onSurface: "#FFFFFF",
      disabled: "rgba(255, 255, 255, 0.38)",
      placeholder: "rgba(255, 255, 255, 0.54)",
      backdrop: "rgba(0, 0, 0, 0.5)",
      notification: "rgb(255, 69, 58)",
      card: "rgb(18, 18, 18)",
      border: "rgb(39, 39, 41)",
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
    animation: {
      scale: 1,
    },
    mode: "adaptive",
  },
  preview: "UI",
};

export const TemplateDrawer = {
  navigators: {
    XYEQbR2HDrwtLI39yOwQL: {
      name: "Drawer",
      type: "Drawer",
      id: "XYEQbR2HDrwtLI39yOwQL",
      screens: {
        x6xrM6FS8YNZliw3lqLG1: {
          component: {
            navigatorId: "vrKqsMw67oddlRmmMXUrv",
            type: "Navigator",
          },
          name: "DrawerPage1",
          id: "x6xrM6FS8YNZliw3lqLG1",
          headerShown: true,
        },
        b0H89D2ECKz0rO1wdLgxn: {
          component: {
            navigatorId: "YXASEBgm-95h6EbcRdsJV",
            type: "Navigator",
          },
          name: "DrawerPage2",
          id: "b0H89D2ECKz0rO1wdLgxn",
          headerShown: true,
        },
      },
    },
    vrKqsMw67oddlRmmMXUrv: {
      name: "Page1",
      type: "Stack",
      id: "vrKqsMw67oddlRmmMXUrv",
      screens: {
        "61A6lXe61UcuuQ5mjddgk": {
          component: {
            type: "View",
          },
          name: "Screen1",
          id: "61A6lXe61UcuuQ5mjddgk",
          headerShown: true,
          headerLeft: {
            icon: "menu",
            action: "toggleDrawer",
          },
          headerRight: {
            icon: "magnify",
            action: "navigate",
            payload: "Search",
          },
        },
      },
    },
    "YXASEBgm-95h6EbcRdsJV": {
      name: "Page2",
      type: "Stack",
      id: "YXASEBgm-95h6EbcRdsJV",
      screens: {
        "yauV079DbKm-XXauCtSb1": {
          component: {
            type: "View",
          },
          name: "Screen2",
          id: "yauV079DbKm-XXauCtSb1",
          headerShown: true,
          headerLeft: {
            icon: "menu",
            action: "toggleDrawer",
          },
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
          component: {
            type: "View",
          },
          name: "Search",
          id: "T6ZAL8Bh6_xchEdyi-msk",
          headerShown: true,
        },
        CT5WWUsxhu9M_ApGPqaCN: {
          component: {
            type: "View",
          },
          name: "Account",
          id: "CT5WWUsxhu9M_ApGPqaCN",
          headerShown: true,
        },
      },
    },
  },
  rootId: "H3Piyq4IIQvpEiSzB6lp8",
  inspector: {
    type: "Screen",
    screenId: "x6xrM6FS8YNZliw3lqLG1",
    navigatorId: "XYEQbR2HDrwtLI39yOwQL",
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
    animation: {
      scale: 1,
    },
  },
  preview: "UI",
};

const Projects = {
  Tabs: TemplateTabs,
  Drawer: TemplateDrawer,
};

export default Projects;

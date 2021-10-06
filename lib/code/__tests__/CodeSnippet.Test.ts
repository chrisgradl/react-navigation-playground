import createCodeSnippet from "../CodeSnippet";
import { TemplateTabs } from "../../../redux/Templates";

const state = {
  navigators: {
    "1": {
      id: "1",
      name: "RootNavigator Tab",
      screens: {
        screen1: {
          component: {
            type: "Navigator",
            navigatorId: "2",
          },
          name: "screen1",
          id: "screen1",
        },
        screen2: {
          component: {
            type: "Navigator",
            navigatorId: "3",
          },
          name: "screen2",
          id: "screen2",
        },
        "bBgTtZD67L5-XZM2vD-K3": {
          component: {
            navigatorId: "S8dXKRag2p_fNxkrHJbCo",
            type: "Navigator",
          },
          name: "Screen-6698",
          id: "bBgTtZD67L5-XZM2vD-K3",
        },
      },
      type: "Tab",
    },
    "2": {
      name: "Stack 1 in Tab",
      id: "2",
      type: "Stack",
      screens: {
        "4": {
          component: {
            type: "View",
          },
          name: "screen4",
          id: "4",
        },
      },
    },
    "3": {
      name: "Stack 2 in Tab",
      id: "3",
      type: "Stack",
      screens: {
        "5": {
          component: {
            type: "View",
          },
          name: "screen5",
          id: "5",
        },
      },
    },
    S8dXKRag2p_fNxkrHJbCo: {
      name: "Navigator-6990",
      type: "Stack",
      id: "S8dXKRag2p_fNxkrHJbCo",
      screens: {
        ppGt6YkETtMUciFZgjDJp: {
          component: {
            type: "View",
          },
          name: "Screen-7675",
          id: "ppGt6YkETtMUciFZgjDJp",
        },
        "9kmgCXPBbo6p4s_pwgx3U": {
          component: {
            type: "View",
          },
          name: "Screen-4610",
          id: "9kmgCXPBbo6p4s_pwgx3U",
        },
        "7yp2ZPkL0npkGfWU0o2VN": {
          component: {
            type: "View",
          },
          name: "Screen-8994",
          id: "7yp2ZPkL0npkGfWU0o2VN",
        },
      },
    },
    qdNq9Bgp1qrVPYwdyAQl5: {
      name: "Navigator-5731",
      type: "Stack",
      id: "qdNq9Bgp1qrVPYwdyAQl5",
      screens: {},
    },
  },
  rootId: "1",
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
};

it("should convert State to CodeSnippet", async () => {
  const code = await createCodeSnippet(state as any);
  console.log(code);
  expect(code).toBeDefined();
});

it("should convert Tab State to CodeSnippet", async () => {
  const code = await createCodeSnippet(TemplateTabs as any);
  console.log(code);
  expect(code).toBeDefined();
});

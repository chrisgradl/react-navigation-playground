import React from "react";
import { Appbar, Button } from "react-native-paper";
import ExportToSnack from "./ExportToSnack";
import AddProjectToFeed from "./AddProjectToFeed";
import { useRouter } from "next/router";
import TemplateMenu from "./TemplateMenu";

const FeedHeader = () => {
  const router = useRouter();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title="React-Navigation Playground" />
      <Appbar.Action
        icon="github"
        onPress={() =>
          window.open(
            "https://github.com/chrisgradl/react-navigation-playground"
          )
        }
      />
    </Appbar.Header>
  );
};

const Header = () => {
  const router = useRouter();

  return (
    <Appbar.Header>
      <TemplateMenu />
      <Appbar.Content title="React-Navigation Playground" />
      <Button color={"white"} onPress={() => router.push("/feed")}>
        Feed
      </Button>
      <AddProjectToFeed />
      <ExportToSnack
        renderButton={({ loading, onPress }) => (
          <Button
            color={"white"}
            icon={"open-in-new"}
            disabled={loading}
            onPress={onPress}
          >
            Open Snack
          </Button>
        )}
      />
      <Appbar.Action
        icon="github"
        onPress={() =>
          window.open(
            "https://github.com/chrisgradl/react-navigation-playground"
          )
        }
      />
    </Appbar.Header>
  );
};

export { FeedHeader };

export default Header;

import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import playgroundAPI from "../lib/playgroundAPI";
import Link from "next/link";

interface Props {}

const Feed: React.FC<Props> = () => {
  const data = playgroundAPI.getLatestProjects();

  return (
    <View>
      <Text>HELLO FEED</Text>
        {data.map(value =>
            <Link href={`/player/${encodeURIComponent(value)}`}>
                <Text>{value}</Text>
            </Link>
        )}
    </View>
  );
};

export default Feed;

import React from "react";
import { View } from "react-native";

export default function SectionContainer({
  selected,
  children,
}: {
  children: React.ReactNode;
  selected: boolean;
}) {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: selected
          ? "rgba(0, 122, 255, 0.2)"
          : "rgba(0, 122, 255, 0.1)",
        marginBottom: 16,
      }}
    >
      {children}
    </View>
  );
}

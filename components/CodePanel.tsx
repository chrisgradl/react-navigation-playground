import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useAppSelector } from "../redux/store";
import createCodeSnippet from "../lib/CodeSnippet";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";

const CodePanel: React.FC = () => {
  const components = useAppSelector((state) => state);
  const [code, setCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getCode = async () => {
      const code = await createCodeSnippet(components);
      setCode(code);
    };

    getCode();
  }, [components]);

  return (
    <View style={{paddingHorizontal: 16 }}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code || "// Formatting code… please wait ✨"}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </View>
  );
};

export default CodePanel;

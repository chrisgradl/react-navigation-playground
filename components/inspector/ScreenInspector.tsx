import React from "react";
import { Title } from "react-native-paper";
import { editScreen as editScreenAction } from "../../redux/NavigatorReducer";
import { useDispatch } from "react-redux";
import { selectScreen } from "../../redux/SelectedInspectorReducer";
import { InspectorItemSpace } from "./InspectorItem";
import TextWithEditFunction from "../misc/TextWithEditFunction";
import ScreenOptionsEditor from "./ScreenOptionsInspector";
import { useAppSelector } from "../../redux/types";
import ScreenComponentPicker from "./ScreenComponentPicker";

const ScreenInspector: React.FC = () => {
  const screen = useAppSelector(selectScreen);
  const { navigatorId } = useAppSelector((state) => state.inspector);

  const navigators = useAppSelector((state) => state.navigators);
  const navigatorList = Object.values(navigators).filter(
    (nav) => nav.id !== navigatorId
  );

  const dispatch = useDispatch();

  if (!screen) {
    return <Title>Select Screen</Title>;
  }

  const editScreen = (data) =>
    dispatch(editScreenAction({ screenId: screen.id, navigatorId, data }));

  return (
    <>
      <TextWithEditFunction
        label={"Name"}
        value={screen.name}
        onValueChangeSubmit={(value) =>
          editScreen({
            name: value,
          })
        }
      />
      <InspectorItemSpace />
      <ScreenComponentPicker
        navigators={navigatorList}
        onChange={editScreen}
        screen={screen}
      />
      <InspectorItemSpace />
      <ScreenOptionsEditor screen={screen} editScreen={editScreen} />
      <InspectorItemSpace />
    </>
  );
};

export default ScreenInspector;

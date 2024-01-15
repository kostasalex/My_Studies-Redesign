import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Steps } from "rsuite";
import PencilSquareIcon from "@rsuite/icons/legacy/PencilSquare";
import BookIcon from "@rsuite/icons/legacy/Book";
import WechatIcon from "@rsuite/icons/Wechat";
import SteamSquareIcon from "@rsuite/icons/legacy/SteamSquare";
import { FaGraduationCap } from "react-icons/fa";

const App = () => (
  <Steps current={4}>
    <Steps.Item
      title="1ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="2ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="3ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="4ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="5ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="6ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="7ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
    <Steps.Item
      title="8ο Εξάμηνο"
      icon={<FaGraduationCap style={{ fontSize: 20 }} />}
    />
  </Steps>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

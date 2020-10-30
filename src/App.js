import React from 'react';
import { observer } from 'mobx-react';
import { Context, PAGE } from "./constants";

import AudioContainer from "./components/AudioContainer";
import CardContainer from "./components/CardContainer";
import ItemContainer from "./components/ItemContainer";
import Top from "./components/Top";

const App = observer(() => {
  const store = React.useContext(Context);
  return (
    <>
      <Top />
      {store.route.currentPage === PAGE.CARD && <CardContainer />}
      {store.route.currentPage === PAGE.ITEM && <ItemContainer />}
      {store.route.currentPage === PAGE.AUDIO && <AudioContainer />}
    </>
  );
});

export default App;

/** TODO
 * - 页面美化
 * - 播放器进度条
 * - 播放进度操控
 * - 倍速播放
 * - 播放器页面显示当前card 和item
 * - item 页面显示当前 card
 * - 播放结束之后，手动控制的playing 状态要更新
 * - 增加播放模式，单曲循环、顺序播放、随机播放、播放一次
 */

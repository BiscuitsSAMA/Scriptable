// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: bolt;
/*
 * Author: evilbutcher
 * Github: https://github.com/evilbutcher
 * 本脚本使用了@Gideon_Senku的Env.scriptable，感谢！
 */

const $ = new importModule("Env")();
const rid = 0; //手动更改B站榜单对应关系：0全站，1动画，3音乐，4游戏，5娱乐，36科技，119鬼畜，129舞蹈。
const res = await getinfo();

let widget = createWidget(res);
Script.setWidget(widget);
Script.complete();

function createWidget(res) {
  const obj = res;
  var group = obj.data;
  items = [];
  for (var i = 0; i < 6; i++) {
    var item = group[i].title;
    items.push(item);
  }

  const w = new ListWidget();
  const bgColor = new LinearGradient();
  bgColor.colors = [new Color("#1c1c1c"), new Color("#29323c")];
  bgColor.locations = [0.0, 1.0];
  w.backgroundGradient = bgColor;
  w.centerAlignContent();

  const firstLine = w.addText(`[📣]B站榜单`);
  firstLine.textSize = 12;
  firstLine.textColor = Color.white();
  firstLine.textOpacity = 0.7;

  const top1Line = w.addText(`•${items[0]}`);
  top1Line.textSize = 12;
  top1Line.textColor = Color.white();

  const top2Line = w.addText(`•${items[1]}`);
  top2Line.textSize = 12;
  top2Line.textColor = new Color("#6ef2ae");

  const top3Line = w.addText(`•${items[2]}`);
  top3Line.textSize = 12;
  top3Line.textColor = new Color("#7dbbae");

  const top4Line = w.addText(`•${items[3]}`);
  top4Line.textSize = 12;
  top4Line.textColor = new Color("#ff9468");

  const top5Line = w.addText(`•${items[4]}`);
  top5Line.textSize = 12;
  top5Line.textColor = new Color("#ffcc66");

  const top6Line = w.addText(`•${items[5]}`);
  top6Line.textSize = 12;
  top6Line.textColor = new Color("#ffa7d3");
  return w;
}

async function getinfo() {
  const blRequest = {
    url: `https://app.bilibili.com/x/v2/rank/region?rid=${rid}`,
  };

  const res = await $.get(blRequest);
  log(res);
  return res;
}

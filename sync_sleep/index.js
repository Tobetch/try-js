console.log("start");

function sleep(milliSeconds) {
  var startTime = new Date().getTime();
  // console.log(startTime);
  while (new Date().getTime() < startTime + milliSeconds);

  console.log("sleepが完了しました。");
}

sleep(5000); // 実行するのに5秒かかる

console.log("end");

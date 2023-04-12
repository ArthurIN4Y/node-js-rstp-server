const express = require("express");
const expressWs = require("express-ws")(express());
const { proxy } = require("rtsp-relay")(express);

const app = expressWs.app;

const handler = proxy({
  url: "rtsp://silocam:Siloc@m1324@192.168.0.65:554/cam/realmonitor?channel=12&subtype=1",
  verbose: false,
});

const handler2 = proxy({
  url: "rtsp://silocam:Siloc@m1324@192.168.0.65:554/cam/realmonitor?channel=4&subtype=1",
  verbose: false,
});

app.ws("/stream/1", handler);
app.ws("/stream/2", handler2);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

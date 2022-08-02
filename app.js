const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");


const app = express();

app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

const data = [
  {
    streetname: "Schanzenstraße",
    lamps: [
      {
        id: "27Ha92",
        status: "idle",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 15,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "M9aAc2",
        status: "idle",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 15,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "LAW92s",
        status: "on",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 90,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "a2A64b",
        status: "off",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 0,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "27Ha92",
        status: "idle",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 15,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "M9aAc2",
        status: "idle",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 15,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "LAW92s",
        status: "on",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 90,
        brightnessMax: 100,
        brightnessMin: 0,
      },
      {
        id: "a2A64b",
        status: "off",
        coordinates: {
          latitude: 52.527,
          longitude: 13.4,
        },
        brightness: 0,
        brightnessMax: 100,
        brightnessMin: 0,
      },
    ],
  },
  {
    streetname: "Steinmüllerallee",
    lamps: [],
  },
];

app.get("/", (req, res) => {
  res.render("pages/index", {
    data,
    title: "Smart Street Lighting",
  });
});

app.get("/add", (req, res) => {
  res.render("pages/add", {
    data,
    title: "Smart Street Lighting",
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at port ${port} - http://localhost:${port}`);
});

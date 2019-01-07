import React from "react";
import { ListGroupItem, Slider } from "shards-react";

const Sliders = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">Custom Sliders</strong>
      <Slider
        theme="success"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
      <Slider
        theme="info"
        className="my-4"
        connect={[false, true]}
        start={[15]}
        range={{ min: 0, max: 100 }}
      />
      <Slider
        connect
        start={[35, 65]}
        pips={{
          mode: "positions",
          values: [0, 25, 50, 75, 100],
          stepped: true,
          density: 5
        }}
        range={{ min: 0, max: 100 }}
      />
    </div>
  </ListGroupItem>
);

export default Sliders;

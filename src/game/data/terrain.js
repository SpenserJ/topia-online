﻿// Represents a tileable graphical terrain rectangle  // Todo:  Associate with a rectangle as 'bounds' property
define(["core/common/data"], function (data) {

    var Terrain = function () {

        //The x position of the terrain center.
        this.x = 0;

        // The y position of the terrain center.
        this.y = 0;

        // The total width of the bounds of the terrain.
        this.width = 0;

        // The total height of the bounds of the terrain.
        this.height = 0;
    };

    return data.define("terrain", Terrain);
});
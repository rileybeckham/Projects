class Map {
    constructor(scene, key, tileSetName, backgroundLayerName, blockedLayerName){
        this.scene = scene; 
        this.key = key; // tiled JSON file key name
        this.tileSetName = tileSetName; // Tiled TileSet key name
        this.backgroundLayerName = backgroundLayerName; // Background created in Tiled
        this.blockedLayerName = blockedLayerName; // Blocked areas created in Tiled
        this.createMap();
    }
    createMap(){
        // create the tile map
        this.map = this.scene.make.tilemap({ key: this.key });
        // add the tileset image to map
        this.tiles = this.map.addTilesetImage(this.tileSetName,  this.tileSetName, 32, 32, 1, 2);
       
        // create background layer
        this.backgroundLayer = this.map.createStaticLayer(this.backgroundLayerName, this.tiles, 0, 0);
        this.backgroundLayer.setScale(2);
        //create blocked layer
        this.blockedLayer = this.map.createStaticLayer(this.blockedLayerName, this.tiles, 0, 0);
        this.blockedLayer.setScale(2);
        this.blockedLayer.setCollisionByExclusion([-1]);
    
        //set world bounds
        this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
        this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;
    
    
        //limit camera to the size of the map
        this.scene.cameras.main.setBounds(0,0, this.map.widthInPixels * 2, this.map.heightInPixels * 2);
      }
}
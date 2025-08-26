var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIWorldImagery_1 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Philippineportal_2 = new ol.layer.Tile({
            'title': 'Philippine portal',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemapserver.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png'
            })
        });
var format_CADT2_3 = new ol.format.GeoJSON();
var features_CADT2_3 = format_CADT2_3.readFeatures(json_CADT2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADT2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADT2_3.addFeatures(features_CADT2_3);
var lyr_CADT2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADT2_3, 
                style: style_CADT2_3,
                popuplayertitle: 'CADT2',
                interactive: true,
                title: '<img src="styles/legend/CADT2_3.png" /> CADT2'
            });
var format_SMFBYELLOW_4 = new ol.format.GeoJSON();
var features_SMFBYELLOW_4 = format_SMFBYELLOW_4.readFeatures(json_SMFBYELLOW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMFBYELLOW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMFBYELLOW_4.addFeatures(features_SMFBYELLOW_4);
var lyr_SMFBYELLOW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMFBYELLOW_4, 
                style: style_SMFBYELLOW_4,
                popuplayertitle: 'SMFB YELLOW',
                interactive: true,
                title: '<img src="styles/legend/SMFBYELLOW_4.png" /> SMFB YELLOW'
            });
var format_SMFBBLUE_5 = new ol.format.GeoJSON();
var features_SMFBBLUE_5 = format_SMFBBLUE_5.readFeatures(json_SMFBBLUE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMFBBLUE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMFBBLUE_5.addFeatures(features_SMFBBLUE_5);
var lyr_SMFBBLUE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMFBBLUE_5, 
                style: style_SMFBBLUE_5,
                popuplayertitle: 'SMFB BLUE',
                interactive: true,
                title: '<img src="styles/legend/SMFBBLUE_5.png" /> SMFB BLUE'
            });
var format_SMFBRED_6 = new ol.format.GeoJSON();
var features_SMFBRED_6 = format_SMFBRED_6.readFeatures(json_SMFBRED_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMFBRED_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMFBRED_6.addFeatures(features_SMFBRED_6);
var lyr_SMFBRED_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMFBRED_6, 
                style: style_SMFBRED_6,
                popuplayertitle: 'SMFB RED',
                interactive: true,
                title: '<img src="styles/legend/SMFBRED_6.png" /> SMFB RED'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRIWorldImagery_1.setVisible(true);lyr_Philippineportal_2.setVisible(true);lyr_CADT2_3.setVisible(true);lyr_SMFBYELLOW_4.setVisible(true);lyr_SMFBBLUE_5.setVisible(true);lyr_SMFBRED_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRIWorldImagery_1,lyr_Philippineportal_2,lyr_CADT2_3,lyr_SMFBYELLOW_4,lyr_SMFBBLUE_5,lyr_SMFBRED_6];
lyr_CADT2_3.set('fieldAliases', {'FID': 'FID', });
lyr_SMFBYELLOW_4.set('fieldAliases', {'FID': 'FID', });
lyr_SMFBBLUE_5.set('fieldAliases', {'FID': 'FID', });
lyr_SMFBRED_6.set('fieldAliases', {'FID': 'FID', });
lyr_CADT2_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_SMFBYELLOW_4.set('fieldImages', {'FID': '', });
lyr_SMFBBLUE_5.set('fieldImages', {'FID': '', });
lyr_SMFBRED_6.set('fieldImages', {'FID': '', });
lyr_CADT2_3.set('fieldLabels', {'FID': 'no label', });
lyr_SMFBYELLOW_4.set('fieldLabels', {'FID': 'no label', });
lyr_SMFBBLUE_5.set('fieldLabels', {'FID': 'no label', });
lyr_SMFBRED_6.set('fieldLabels', {'FID': 'no label', });
lyr_SMFBRED_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
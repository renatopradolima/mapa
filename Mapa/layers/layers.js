var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUBORDINAO_1 = new ol.format.GeoJSON();
var features_SUBORDINAO_1 = format_SUBORDINAO_1.readFeatures(json_SUBORDINAO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBORDINAO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBORDINAO_1.addFeatures(features_SUBORDINAO_1);
var lyr_SUBORDINAO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBORDINAO_1, 
                style: style_SUBORDINAO_1,
                interactive: true,
    title: 'SUBORDINAÇÃO<br />\
    <img src="styles/legend/SUBORDINAO_1_0.png" /> Federal<br />\
    <img src="styles/legend/SUBORDINAO_1_1.png" /> Estadual<br />\
    <img src="styles/legend/SUBORDINAO_1_2.png" /> Municipal<br />\
    <img src="styles/legend/SUBORDINAO_1_3.png" /> Privada<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SUBORDINAO_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SUBORDINAO_1];
lyr_SUBORDINAO_1.set('fieldAliases', {'CO_ENTIDADE': 'CO_ENTIDADE', 'CO_UF': 'CO_UF', 'SG_UF': 'SG_UF', 'CO_MUNICIPIO': 'CO_MUNICIPIO', 'NO_MUNICIPIO': 'NO_MUNICIPIO', 'LOCALIZACAO': 'LOCALIZACAO', 'LOCALIZACAO_DIFERENCIADA': 'LOCALIZACAO_DIFERENCIADA', 'EDUCACAO_INDIGENA': 'EDUCACAO_INDIGENA', 'DEP_ADM': 'DEP_ADM', 'CENSO_2022_N_TURMAS_FUNDAMENTAL': 'CENSO_2022_N_TURMAS_FUNDAMENTAL', 'CENSO_2022_N_TURMAS_MEDIO': 'CENSO_2022_N_TURMAS_MEDIO', 'CENSO_2022_N_TURMAS': 'CENSO_2022_N_TURMAS', 'CENSO_2022_N_MATRICULAS_TOTAL': 'CENSO_2022_N_MATRICULAS_TOTAL', 'ESTRATOGEO': 'ESTRATOGEO', 'ESTDIM': 'ESTDIM', 'ESTALOCA_AGREG': 'ESTALOCA_AGREG', 'N_TURMAS_SELEC': 'N_TURMAS_SELEC', 'SUBAMOSTRA_ANTROP': 'SUBAMOSTRA_ANTROP', 'RESTRICAO': 'RESTRICAO', 'NO_ESCOLA': 'NO_ESCOLA', 'ENDEREÇO': 'ENDEREÇO', 'TELEFONE': 'TELEFONE', 'AMBITO_SUBORDINACAO': 'AMBITO_SUBORDINACAO', 'CATEGORIA_ESCOLA_PRIVADA': 'CATEGORIA_ESCOLA_PRIVADA', 'CONVENIADA': 'CONVENIADA', 'REGULAMENTACAO_CONSELHO': 'REGULAMENTACAO_CONSELHO', 'PORTE': 'PORTE', 'ETAPAS_E_MODALIDADE': 'ETAPAS_E_MODALIDADE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CO_AGENCIA': 'CO_AGENCIA', 'NO_AGENCIA': 'NO_AGENCIA', 'N_AGENCIAS': 'N_AGENCIAS', 'field_34': 'field_34', 'INFORMAÇÕES ADICIONAIS': 'INFORMAÇÕES ADICIONAIS', 'field_36': 'field_36', });
lyr_SUBORDINAO_1.set('fieldImages', {'CO_ENTIDADE': 'TextEdit', 'CO_UF': 'TextEdit', 'SG_UF': 'TextEdit', 'CO_MUNICIPIO': 'TextEdit', 'NO_MUNICIPIO': 'TextEdit', 'LOCALIZACAO': 'TextEdit', 'LOCALIZACAO_DIFERENCIADA': 'TextEdit', 'EDUCACAO_INDIGENA': 'TextEdit', 'DEP_ADM': 'TextEdit', 'CENSO_2022_N_TURMAS_FUNDAMENTAL': 'TextEdit', 'CENSO_2022_N_TURMAS_MEDIO': 'TextEdit', 'CENSO_2022_N_TURMAS': 'TextEdit', 'CENSO_2022_N_MATRICULAS_TOTAL': 'TextEdit', 'ESTRATOGEO': 'TextEdit', 'ESTDIM': 'TextEdit', 'ESTALOCA_AGREG': 'TextEdit', 'N_TURMAS_SELEC': 'TextEdit', 'SUBAMOSTRA_ANTROP': 'TextEdit', 'RESTRICAO': 'TextEdit', 'NO_ESCOLA': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'TELEFONE': 'TextEdit', 'AMBITO_SUBORDINACAO': 'TextEdit', 'CATEGORIA_ESCOLA_PRIVADA': 'TextEdit', 'CONVENIADA': 'TextEdit', 'REGULAMENTACAO_CONSELHO': 'TextEdit', 'PORTE': 'TextEdit', 'ETAPAS_E_MODALIDADE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CO_AGENCIA': 'TextEdit', 'NO_AGENCIA': 'TextEdit', 'N_AGENCIAS': 'TextEdit', 'field_34': 'TextEdit', 'INFORMAÇÕES ADICIONAIS': 'TextEdit', 'field_36': 'TextEdit', });
lyr_SUBORDINAO_1.set('fieldLabels', {'CO_ENTIDADE': 'no label', 'CO_UF': 'no label', 'SG_UF': 'no label', 'CO_MUNICIPIO': 'no label', 'NO_MUNICIPIO': 'no label', 'LOCALIZACAO': 'no label', 'LOCALIZACAO_DIFERENCIADA': 'no label', 'EDUCACAO_INDIGENA': 'no label', 'DEP_ADM': 'no label', 'CENSO_2022_N_TURMAS_FUNDAMENTAL': 'no label', 'CENSO_2022_N_TURMAS_MEDIO': 'no label', 'CENSO_2022_N_TURMAS': 'no label', 'CENSO_2022_N_MATRICULAS_TOTAL': 'no label', 'ESTRATOGEO': 'no label', 'ESTDIM': 'no label', 'ESTALOCA_AGREG': 'no label', 'N_TURMAS_SELEC': 'no label', 'SUBAMOSTRA_ANTROP': 'no label', 'RESTRICAO': 'no label', 'NO_ESCOLA': 'no label', 'ENDEREÇO': 'no label', 'TELEFONE': 'no label', 'AMBITO_SUBORDINACAO': 'no label', 'CATEGORIA_ESCOLA_PRIVADA': 'no label', 'CONVENIADA': 'no label', 'REGULAMENTACAO_CONSELHO': 'no label', 'PORTE': 'no label', 'ETAPAS_E_MODALIDADE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'CO_AGENCIA': 'no label', 'NO_AGENCIA': 'no label', 'N_AGENCIAS': 'no label', 'field_34': 'no label', 'INFORMAÇÕES ADICIONAIS': 'no label', 'field_36': 'no label', });
lyr_SUBORDINAO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
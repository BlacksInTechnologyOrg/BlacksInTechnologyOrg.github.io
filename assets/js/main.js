var infosec_url = 'https://docs.google.com/spreadsheets/d/1aSsDMcspgwgaVdotnkne4DorQtTQHDYFTrpgboUMgeg/edit?usp=sharing';

function infosec(){
    Tabletop.init( { key: infosec_url,
                    callback: infosecPull,
                    parseNumbers: true } );
                    
};
    
function infosecPull(data, tabletop) {
    var source   = $("#infosec-resources").html();
    var template = Handlebars.compile(source);
    $.each( tabletop.sheets("informationSecurity").all(), function(i, data) {
    var html = template(data);
    $("#content").append(html);
    });
}

function entrepreneur() {
    Tabletop.init( { key: infosec_url,
                    callback: entrepreneurPull,
                    parseNumbers: true } );
                    
};
    
function entrepreneurPull(data, tabletop) {
    var source   = $("#entrepreneur-resources").html();
    var template = Handlebars.compile(source);
    $.each( tabletop.sheets("entrepreneur").all(), function(i, data) {
    var html = template(data);
    $("#content").append(html);
    });
}

window.addEventListener('DOMContentLoaded', infosec)
window.addEventListener('DOMContentLoaded', entrepreneur)
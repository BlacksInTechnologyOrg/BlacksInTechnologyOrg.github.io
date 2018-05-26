function Tabletop() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     parseNumbers: true } );
  });
    
  function showInfo(data, tabletop) {
    var source   = $("#cat-template").html();
    var template = Handlebars.compile(source);
    $.each( tabletop.sheets("Cats").all(), function(i, cat) {
      var html = template(cat);
      $("#content").append(html);
    });
  }
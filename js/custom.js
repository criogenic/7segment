
var arrColors = [
        "#000000", "#000055", "#0000AA", "#0000FF", "#005500", "#005555", "#0055AA", "#0055FF",
        "#550000", "#550055", "#5500AA", "#5500FF", "#555500", "#555555", "#5555AA", "#5555FF",
        "#AA0000", "#AA0055", "#AA00AA", "#AA00FF", "#AA5500", "#AA5555", "#AA55AA", "#AA55FF",
        "#FF0000", "#FF0055", "#FF00AA", "#FF00FF", "#FF5500", "#FF5555", "#FF55AA", "#FF55FF",
        "#00AA00", "#00AA55", "#00AAAA", "#00AAFF", "#00FF00", "#00FF55", "#00FFAA", "#00FFFF",
        "#55AA00", "#55AA55", "#55AAAA", "#55AAFF", "#55FF00", "#55FF55", "#55FFAA", "#55FFFF",
        "#AAAA00", "#AAAA55", "#AAAAAA", "#AAAAFF", "#AAFF00", "#AAFF55", "#AAFFAA", "#AAFFFF",
        "#FFAA00", "#FFAA55", "#FFAAAA", "#FFAAFF", "#FFFF00", "#FFFF55", "#FFFFAA", "#FFFFFF"];

function saveOptions() {
  var options = {
    'status': parseInt( $("#display-status").val() ),
    'background': parseInt( $("#display-bg").val() ),
    'language': parseInt( $("#language :selected").val() ),
    'format': parseInt( $("#format :selected").val() ),
    'format': parseInt( $("#format :selected").val() )
  }
  return options;
}
      
// And finally, the actual pebble configuration stuff
function getQueryParam(variable, defaultValue) {
  // Find all URL parameters
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    // If the query variable parameter is found, decode it to use and return it for use
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
      
$().ready(function() {
        
  // Handle cancel button
  $("#b-cancel").click(function() {
    console.log( "Cancel" );
    document.location = "pebblejs://close#";
  });

  // Handle submit button
  $("#b-submit").click(function() {
    console.log( "Submit" );
    // Set the return URL depending on the runtime environment
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location.href = return_to + encodeURIComponent(JSON.stringify(saveOptions()));
  });

  // Setup Spectrum picker with Pebble Time Palette
  $(".colorpicker").spectrum({
    allowEmpty: true,
    showPaletteOnly: true,
    preferredFormat: "hex3",
    hideAfterPaletteSelect: true,
    change: function(color) {
    },
    palette: [
      [ '000', '005', '00a', '00f', '050', '055', '05a', '05f' ],
      [ '500', '505', '50a', '50f', '550', '555', '55a', '55f' ],
      [ 'a00', 'a05', 'a0a', 'a0f', 'a50', 'a55', 'a5a', 'a5f' ],
      [ 'f00', 'f05', 'f0a', 'f0f', 'f50', 'f55', 'f5a', 'f5f' ],
      [ '0a0', '0a5', '0aa', '0af', '0f0', '0f5', '0fa', '0ff' ],
      [ '5a0', '5a5', '5aa', '5af', '5f0', '5f5', '5fa', '5ff' ],
      [ 'aa0', 'aa5', 'aaa', 'aaf', 'af0', 'af5', 'afa', 'aff' ],
      [ 'fa0', 'fa5', 'faa', 'faf', 'ff0', 'ff5', 'ffa', 'fff' ]
    ]
  });
        
  var appstatus = $.params( "appstatus" );
  if (appstatus < 3){
    $("[name=color_section]").hide();
  }      
  
  // Set initial values
  $("[name=display-status]").val( $.params( "status" ) );
  $("[name=display-bg]").val( $.params( "background" ) );
  $("[name=language]").val( $.params( "language" ) );
  $("[name=format]").val( $.params( "format" ) );
  //$("[name=backgroundcolor]").val( $.params( "backgroundcolor" ) );
  $("[name=textcolor]").val( $.params( "textcolor" ) );
  $("#bkg-color").spectrum({ color: arrColors[($.params( "backgroundcolor" )- 192)] })

});

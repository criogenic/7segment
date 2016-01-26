
$().ready(function() {
  var appstatus = getQueryParam( "appstatus" , 0 );
  if (appstatus < 3){
    $("[name=color_section]").hide();
  } 

  $(".colorpicker").spectrum({
    allowEmpty: true,
    showPaletteOnly: true,
    preferredFormat: "hex",
    hideAfterPaletteSelect: true,
    change: function(color) {},
    palette: [
      ["#000000", "#000055", "#0000AA", "#0000FF", "#005500", "#005555", "#0055AA", "#0055FF",
      "#550000", "#550055", "#5500AA", "#5500FF", "#555500", "#555555", "#5555AA", "#5555FF",
      "#AA0000", "#AA0055", "#AA00AA", "#AA00FF", "#AA5500", "#AA5555", "#AA55AA", "#AA55FF",
      "#FF0000", "#FF0055", "#FF00AA", "#FF00FF", "#FF5500", "#FF5555", "#FF55AA", "#FF55FF",
      "#00AA00", "#00AA55", "#00AAAA", "#00AAFF", "#00FF00", "#00FF55", "#00FFAA", "#00FFFF",
      "#55AA00", "#55AA55", "#55AAAA", "#55AAFF", "#55FF00", "#55FF55", "#55FFAA", "#55FFFF",
      "#AAAA00", "#AAAA55", "#AAAAAA", "#AAAAFF", "#AAFF00", "#AAFF55", "#AAFFAA", "#AAFFFF",
      "#FFAA00", "#FFAA55", "#FFAAAA", "#FFAAFF", "#FFFF00", "#FFFF55", "#FFFFAA", "#FFFFFF"
      ]
   ]
  });

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

});

var arrColors = [
  "#000000", "#000055", "#0000AA", "#0000FF", "#005500", "#005555", "#0055AA", "#0055FF",
  "#550000", "#550055", "#5500AA", "#5500FF", "#555500", "#555555", "#5555AA", "#5555FF",
  "#AA0000", "#AA0055", "#AA00AA", "#AA00FF", "#AA5500", "#AA5555", "#AA55AA", "#AA55FF",
  "#FF0000", "#FF0055", "#FF00AA", "#FF00FF", "#FF5500", "#FF5555", "#FF55AA", "#FF55FF",
  "#00AA00", "#00AA55", "#00AAAA", "#00AAFF", "#00FF00", "#00FF55", "#00FFAA", "#00FFFF",
  "#55AA00", "#55AA55", "#55AAAA", "#55AAFF", "#55FF00", "#55FF55", "#55FFAA", "#55FFFF",
  "#AAAA00", "#AAAA55", "#AAAAAA", "#AAAAFF", "#AAFF00", "#AAFF55", "#AAFFAA", "#AAFFFF",
  "#FFAA00", "#FFAA55", "#FFAAAA", "#FFAAFF", "#FFFF00", "#FFFF55", "#FFFFAA", "#FFFFFF"
];

function saveOptions() {
  var options = {
    'status': parseInt( $("#display-status").val() ),
    'background': parseInt( $("#display-bg").val() ),
    'language': parseInt( $("#language :selected").val() ),
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

// Set initial values
$("[name=display-status]").val( getQueryParam("status" , 0) );
$("[name=display-bg]").val( getQueryParam("background" , 0) );
$("[name=language]").val( getQueryParam( "language" , 0) );
$("[name=format]").val( getQueryParam( "format" , 0 ) );
//$("[name=backgroundcolor]").val( $.params( "backgroundcolor" ) );
//$("[name=textcolor]").val( $.params( "textcolor" ) );
//$("#bkg-color").spectrum({ color: arrColors[63] });

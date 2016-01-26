
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

var GColor = (function() {
    var mappingSunny = {
        '000000': '000000',
        '000055': '001e41',
        '0000aa': '004387',
        '0000ff': '0068ca',
        '005500': '2b4a2c',
        '005555': '27514f',
        '0055aa': '16638d',
        '0055ff': '007dce',
        '00aa00': '5e9860',
        '00aa55': '5c9b72',
        '00aaaa': '57a5a2',
        '00aaff': '4cb4db',
        '00ff00': '8ee391',
        '00ff55': '8ee69e',
        '00ffaa': '8aebc0',
        '00ffff': '84f5f1',
        '550000': '4a161b',
        '550055': '482748',
        '5500aa': '40488a',
        '5500ff': '2f6bcc',
        '555500': '564e36',
        '555555': '545454',
        '5555aa': '4f6790',
        '5555ff': '4180d0',
        '55aa00': '759a64',
        '55aa55': '759d76',
        '55aaaa': '71a6a4',
        '55aaff': '69b5dd',
        '55ff00': '9ee594',
        '55ff55': '9de7a0',
        '55ffaa': '9becc2',
        '55ffff': '95f6f2',
        'aa0000': '99353f',
        'aa0055': '983e5a',
        'aa00aa': '955694',
        'aa00ff': '8f74d2',
        'aa5500': '9d5b4d',
        'aa5555': '9d6064',
        'aa55aa': '9a7099',
        'aa55ff': '9587d5',
        'aaaa00': 'afa072',
        'aaaa55': 'aea382',
        'aaaaaa': 'ababab',
        'ffffff': 'ffffff',
        'aaaaff': 'a7bae2',
        'aaff00': 'c9e89d',
        'aaff55': 'c9eaa7',
        'aaffaa': 'c7f0c8',
        'aaffff': 'c3f9f7',
        'ff0000': 'e35462',
        'ff0055': 'e25874',
        'ff00aa': 'e16aa3',
        'ff00ff': 'de83dc',
        'ff5500': 'e66e6b',
        'ff5555': 'e6727c',
        'ff55aa': 'e37fa7',
        'ff55ff': 'e194df',
        'ffaa00': 'f1aa86',
        'ffaa55': 'f1ad93',
        'ffaaaa': 'efb5b8',
        'ffaaff': 'ecc3eb',
        'ffff00': 'ffeeab',
        'ffff55': 'fff1b5',
        'ffffaa': 'fff6d3'
    };
    return {
        fromHex: GColorFromHex,
        toHex: GColorToHex,
        fromStrHex: GColorFromStrHex,
        toStrHex: GColorToStrHex,
        toName: GColorName,
        shortHex: GColorShortHex,
        expandHex: GColorExpandHex,
        toSunny: GColorToSunny,
        toSunnyHex: HexToSunnyHex,
        ArmyGreen: 212,
        BabyBlueEyes: 235,
        Black: 192,
        Blue: 195,
        BlueMoon: 199,
        Brass: 233,
        BrightGreen: 220,
        BrilliantRose: 246,
        BulgarianRose: 208,
        CadetBlue: 218,
        Celeste: 239,
        ChromeYellow: 248,
        CobaltBlue: 198,
        Cyan: 207,
        DarkCandyAppleRed: 224,
        DarkGray: 213,
        DarkGreen: 196,
        DukeBlue: 194,
        ElectricBlue: 223,
        ElectricUltramarine: 211,
        FashionMagenta: 242,
        Folly: 241,
        Green: 204,
        Icterine: 253,
        ImperialPurple: 209,
        Inchworm: 237,
        Indigo: 210,
        IslamicGreen: 200,
        JaegerGreen: 201,
        JazzberryJam: 225,
        KellyGreen: 216,
        LavenderIndigo: 231,
        Liberty: 214,
        LightGray: 234,
        Limerick: 232,
        Magenta: 243,
        Malachite: 205,
        MayGreen: 217,
        MediumAquamarine: 222,
        MediumSpringGreen: 206,
        Melon: 250,
        MidnightGreen: 197,
        MintGreen: 238,
        Orange: 244,
        OxfordBlue: 193,
        PastelYellow: 254,
        PictonBlue: 219,
        Purple: 226,
        Purpureus: 230,
        Rajah: 249,
        Red: 240,
        RichBrilliantLavender: 251,
        RoseVale: 229,
        ScreaminGreen: 221,
        ShockingPink: 247,
        SpringBud: 236,
        SunsetOrange: 245,
        TiffanyBlue: 202,
        VeryLightBlue: 215,
        VividCerulean: 203,
        VividViolet: 227,
        White: 255,
        WindsorTan: 228,
        Yellow: 252
    };

    function GColorFromHex(hex) {
        var hexNum = parseInt(hex, 16);
        var a = 192;
        var r = (((hexNum >> 16) & 0xFF) >> 6) << 4;
        var g = (((hexNum >> 8) & 0xFF) >> 6) << 2;
        var b = (((hexNum >> 0) & 0xFF) >> 6) << 0;
        return a + r + g + b;
    }

    function GColorToHex(color) {
        var r = (color & 48) >> 4;
        var g = (color & 12) >> 2;
        var b = (color & 3) >> 0;
        var hexString = [r, g, b].map(function(x) {
            x *= 5;
            return x.toString(16) + x.toString(16);
        }).join('');
        return hexString.toUpperCase();
    }

    function GColorFromStrHex(hex) {
        return GColorFromHex(hex.substring(1));
    }

    function GColorToStrHex(color) {
        return "#" + GColorToHex(color);
    }

    function GColorName(color) {
        var names = Object.keys(GColor);
        for (var n = 0; n < names.length; n += 1) {
            if (GColor[names[n]] == color) {
                return names[n];
            }
        }
        return null;
    }

    function GColorShortHex(hex) {
        return Number(GColorFromHex(hex)).toString(16).toUpperCase();
    }

    function GColorExpandHex(hex) {
        return GColorToHex(parseInt(hex, 16));
    }

    function GColorToSunny(color) {
        return GColorFromHex(mappingSunny[GColorToHex(color).toLowerCase()]);
    }

    function HexToSunnyHex(hex) {
        return mappingSunny[hex.toLowerCase()];
    }
}());

$( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).load(function() {
  console.log( "window loaded" );
      // Set initial values
  $("[name=display-status]").val( getQueryParam("status" , 0) );
  console.log( "Get status " + getQueryParam("status" , 0));
  $("[name=display-bg]").val( getQueryParam("background" , 0) );
  console.log( "Get background " + getQueryParam("background" , 0));
  $("[name=language]").val( getQueryParam( "language" , 0) );
  console.log( "Get language " + getQueryParam("language" , 0));
  $("[name=format]").val( getQueryParam( "format" , 0 ) );
  console.log( "Get format " + getQueryParam("format" , 0));
  //$("[name=backgroundcolor]").val( $.params( "backgroundcolor" ) );
  //$("[name=textcolor]").val( $.params( "textcolor" ) );
  //$("#bkg-color").spectrum("set", GColor.toStrHex( getQueryParam( "backgroundcolor" , 0 ) ) );
  $("#bkg-color").spectrum("set","#AAAAAA");
});

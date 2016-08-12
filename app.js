
//Authorization URL: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
//ClientID:  55d0394eb35a4d88aa67d08fcb58d7f2
//Redirect URL: http://iamalexlee.com
//Access Token: 1209154380.55d0394.7e11d240133144abaf43c558dd578989



jQuery(function() {
    var feed = $("#feed");

    $.ajax({
        url: "https://api.instagram.com/v1/users/1209154380/media/recent?access_token=1209154380.55d0394.7e11d240133144abaf43c558dd578989",
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
            response.data.forEach(function(data) {
                var standard_resolution = $("<img src='"+data.images.standard_resolution.url+"' />");
                var caption = $("<text='"+data.caption.text+"' />");
                var low_resolution = $("<img src='"+data.images.low_resolution.url+"' />");
                var thumbnail = $("<img src='"+data.images.thumbnail.url+"' />");

                feed.append(standard_resolution);
                feed.append(caption);

                console.log(data.images.standard_resolution.url);
            })
            console.log( response ); // server response
        }
    });
})



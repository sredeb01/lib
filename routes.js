	var AppRouter = Backbone.Router.extend({
			routes: {
				//"*actions": "defaultRoute", // matches http://example.com/#anything-here
                "index":"indexRoute"
			}
	});
    
    var app_router = new AppRouter;
    app_router.on('route:indexRoute', function(actions) {
        $LAB
        .script("views/indexView.js") // script1, script2, and script3 do not depend on each other, 
        .wait(function(){  // can still have executable wait(...) functions if you need to
            var indexViewObj=new indexView();
            indexViewObj.render();
        })
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
		
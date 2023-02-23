jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "false",
		    primary: 'html5',
		  
		    

		    skin: {
		    	name: 'ZonAnime',
		    },


		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "  ",
		    description: "  ",
		    image: " ",
		    sources: [{
		    file: "https://files.catbox.moe/n5q3pv.mp4",
		      label: 'opcion 1',
		      'type': 'mp4',
		      primary: 'html5',

		    },{
		    file: "https://files.catbox.moe/n5q3pv.mp4",
		      label: 'opcion 2',
		      'type': 'mp4',
		      primary: 'html5',


		    }],
		    
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});
AFRAME.registerComponent("poster", {
    init: function () {
      this.postersContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "comic-1",
          title: "Marvels's Spiderman",
          url: "./assets/thumbnails/comic1.jpeg",
        },
        {
          id: "comic-2",
          title: "Marvel's Comic #1000",
          url: "./assets/thumbnails/comic2.jpg",
        },
  
        {
          id: "comic-3",
          title: "Marvel's Avengers",
          url: "./assets/thumbnails/comic3.jpg",
        },
        {
          id: "comic-4",
          title: "Marvel's Midnightsuns",
          url: "./assets/thumbnails/comic4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = -2;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        var borderEl = this.createBorders(position , item.id)
        
        var thumbnailEL = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEL)
    
        var textEl = this.createTitle(item , position)
        borderEl.appendChild(textEl)
        this.postersContainer.appendChild(borderEl);
      }
    },
  
    createBorders : function(position , id){
      var entityEl = document.createElement("a-entity")
      entityEl.setAttribute('id' , id)
      entityEl.setAttribute('position' , position)
      entityEl.setAttribute('geometry' , {'primitive': 'plane' , 'width' : 20 , 'height':28})
      entityEl.setAttribute('material' , {'color': 'white' , 'opacity': 0.01})
      entityEl.setAttribute('visible' , true)
      return entityEl
    },
  
    createThumbnail : function(item){
      var entityEl = document.createElement('a-entity')
      entityEl.setAttribute('visible' , true)
      entityEl.setAttribute('geometry' , {'primitive' : 'plane', 'width':20 , 'height': 28 })
      entityEl.setAttribute('material' , {'src' : item.url})
      return entityEl
    },
  
    createTitle : function(item , position){
      var entityEl = document.createElement('a-entity')
      entityEl.setAttribute('text' , {'font': 'exo2bold' , 'align' : 'center' , 'width' : 60 , 'color' : '#f23d3d' , 'value' : item.title})
      var elPos = position
      elPos.y = -40
      entityEl.setAttribute('position' , elPos)
      entityEl.setAttribute('visible', true)
      return entityEl
    }
    
  });
  
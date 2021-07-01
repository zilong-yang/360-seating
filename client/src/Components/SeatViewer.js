import React, { Component } from 'react';
const Marzipano =  require('marzipano');

class SeatViewer extends Component {

    componentDidMount() {

        const viewerOptions = {
            controls: {
                "mouseViewMode": "drag",
            }
        }

        this.viewer = new Marzipano.Viewer(this.pano, viewerOptions);

        const source = Marzipano.ImageUrlSource.fromString("//www.marzipano.net/media/equirect/angra.jpg");

        const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

        const limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
        const view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

        const scene = this.viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
          });
          
          scene.switchTo();
    }

    render() {
        return (
            <div id="pano" ref={pano => this.pano = pano}></div>
        );
    }
}

export default SeatViewer;

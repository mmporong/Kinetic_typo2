
class App {
    constructor() {
        this.setWebgl();

        WebFont.load({
            google: {
              families: ['Hind:700']
            },
            fontactive: () => {
                //6:34
            }
          });
    }

    setWebgl() {
        this.renderer = new PIXI.Renderer({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            antialias: true,
            transparent: false,
            resolution: (window.devicePixelRatio > 1) ? 2 : 1,
            autoDensity: true,
            powerPreference: "high-performance",
            backgroundColor: 0xffffff,
        });

        document.body.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();
    }
}

window.onload = () => {
    new App();
};
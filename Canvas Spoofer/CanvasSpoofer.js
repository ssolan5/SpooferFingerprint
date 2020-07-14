var inject = function() {

    var spoofedcanvasimagedata = {};
    
    var overwrite = function(name) {
        const oldcanvas = HTMLCanvasElement.prototype[name];
        Object.defineProperty(HTMLCanvasElement.prototype, name, {
            "value": function() {
                debugger;
                console.trace();
                
                var width = this.width,
                    height = this.height,
                    context = this.getContext("2d");
            
                //var imageData = context.getImageData(0, 0, width, height);
                
                context.putImageData(spoofedcanvasimagedata, 0, 0);
                return oldcanvas.apply(this, arguments);
            }
        });
    };


    overwrite('toBlob');
    overwrite('toDataURL');

    document.documentElement.dataset.cbscriptallow = true;
};

// INJECTING INTO THE SCRIPT
var script_1 = document.createElement('script');
script_1.textContent = "(" + inject + ")()";
document.documentElement.appendChild(script_1);


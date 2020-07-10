var inject = function () {

  var WebGLSpoofedValues = {

    "37445" : "o", // UNMASKED_VENDOR_WEBGL 
    "37446" : "Mesa DRI Intel(R) Ivybridge Mobile", //UNMASKED_RENDERER_WEBGL
    "7936"  : "MREH", //VENDOR
    "7937"  : "MREH", //RENDERER
    "7938"  : "MREH", //VERSION
    "35724" : "MREH", //SHADING_LANGUAGE_VERSION

    "37157" : "MREH", //MAX_FRAGMENT_INPUT_COMPONENTS
    "37154" : "MREH", //MAX_VERTEX_OUTPUT_COMPONENTS
    "36349" : "MREH", //MAX_FRAGMENT_UNIFORM_VECTORS
    "36348" : "MREH", //MAX_VARYING_VECTORS
    "36347" : "MREH", //MAX_VERTEX_UNIFORM_VECTORS
    "36203" : "MREH", //MAX_ELEMENT_INDEX
    "35978" : "MREH", //MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS
    "35979" : "MREH", //MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS
    "35968" : "MREH", //MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS
    "35661" : "MREH", //MAX_COMBINED_TEXTURE_IMAGE_UNITS
    "35660" : "MREH", //MAX_VERTEX_TEXTURE_IMAGE_UNITS
    "35659" : "MREH", //MAX_VARYING_COMPONENTS
    "35658" : "MREH", //MAX_VERTEX_UNIFORM_COMPONENT
    "35657" : "MREH", //MAX_FRAGMENT_UNIFORM_COMPONENTS
    "35377" : "MREH", //MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS
    "35379" : "MREH", //MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS
    "35376" : "MREH", //MAX_UNIFORM_BLOCK_SIZE
    "35375" : "MREH", //MAX_UNIFORM_BUFFER_BINDINGS
    "35374" : "MREH", //MAX_COMBINED_UNIFORM_BLOCKS    
    "35373" : "MREH", //MAX_FRAGMENT_UNIFORM_BLOCKS
    "35371" : "MREH", //MAX_VERTEX_UNIFORM_BLOCKS
    "35071" : "MREH", //MAX_ARRAY_TEXTURE_LAYERS
    "34930" : "MREH", //MAX_COMBINED_TEXTURE_IMAGE_UNITS
    "34852" : "MREH", //MAX_DRAW_BUFFERS
    "36063" : "MREH", //MAX_COLOR_ATTACHMENTS
    "34921" : "MREH", //MAX_VERTEX_ATTRIBS
    "34076" : "MREH", //MAX_CUBE_MAP_TEXTURE_SIZE
    "34045" : "MREH", //MAX_TEXTURE_LOD_BIAS
    "34024" : "MREH", //MAX_RENDERBUFFER_SIZE
    "33902" : "MREH", //ALIASED_LINE_WIDTH_RANGE
    "33901" : "MREH", //ALIASED_POINT_SIZE_RANGE
    "33001" : "MREH", //MAX_ELEMENTS_INDICES
    "33000" : "MREH", //MAX_ELEMENTS_VERTICES
    "32883" : "MREH", //MAX_3D_TEXTURE_SIZE
    "3386"  : "MREH", //MAX_VIEWPORT_DIMS
    "3379"  : "MREH", //MAX_TEXTURE_SIZE
    "2928"  : "MREH"  //DEPTH_RANGE


  };

  
  var config = {

    "random": {

      "value": function () {return Math.random()},
      "item": function (e) {
        var rand = e.length * config.random.value();
        return e[Math.floor(rand)];
      },
      "array": function (e) {
        var rand = config.random.item(e);
        return new Int32Array([rand, rand]);
      },
      "items": function (e, n) {
        var length = e.length;
        var result = new Array(n);
        var taken = new Array(length);
        if (n > length) n = length;
        //
        while (n--) {
          var i = Math.floor(config.random.value() * length);
          result[n] = e[i in taken ? taken[i] : i];
          taken[i] = --length in taken ? taken[length] : length;
        }
        //
        return result;
      }
    },
    "spoof": {

      "webgl": {
        
        "buffer": function (target) {
          

          const bufferData = target.prototype.bufferData;
          
          Object.defineProperty(target.prototype, "bufferData", {
            "value": function () {
              


              var index = Math.floor(config.random.value() * 10);
              var noise = 0.1 * config.random.value() * arguments[1][index];
              arguments[1][index] = arguments[1][index] + noise;
              //window.top.postMessage("webgl-fingerprint-defender-alert", '*');
              console.log("Here we are applying webgl fingerprint");


              return bufferData.apply(this, arguments);
            }

          });
        },


        "parameter": function (target) {
          
          const getParameter = target.prototype.getParameter;

          Object.defineProperty(target.prototype, "getParameter", {
            
            "value": function () {




              var float32array = new Float32Array([1, 8192]);
              
              


              if (WebGLSpoofedValues [arguments [0]] != undefined ){
                
                  console.log(WebGLSpoofedValues[arguments[0]]);
                  return WebGLSpoofedValues[arguments[0]];

              }

              

              
              
              


             



              return getParameter.apply(this, arguments);

            }

          });
        }
      }
    }
  };
  

              
  //SPOOFING THE BUFFER VALUES
  config.spoof.webgl.buffer(WebGLRenderingContext);
  config.spoof.webgl.buffer(WebGL2RenderingContext);


  //SPOOFING THE CANVAS VALUES
  config.spoof.webgl.parameter(WebGLRenderingContext);
  config.spoof.webgl.parameter(WebGL2RenderingContext);
  
  document.documentElement.dataset.wgscriptallow = true;

};



// INJECTING INTO THE SCRIPT
var script_1 = document.createElement("script");
script_1.textContent = "(" + inject + ")()";
document.documentElement.appendChild(script_1);


// an Example of a valid fingerprint taken from one of my devices. 
var samplefingerprint = {
  7936:"WebKit",
  7937:"WebKit WebGL",
  7938:"WebGL 2.0 (OpenGL ES 3.0 Chromium)",
  37445:"Google Inc.",
  37446:"Google SwiftShader",
  35724:"WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
  34921:"32",
  36347:"256",
  35660:"16",
  36348:"32",
  35658:"1036",
  35371:"12",
  37154:"64",
  35659:"128",
  35978:"64",
  35979:"4",
  35968:"64",
  33902:"[1, 1]",
  33901:"[0.125, 8192]",
  36349:"224",
  34930:"16",
  34852:"8",
  36063:"8",
  36183:"4",
  3410:"8",
  3411:"8",
  3412:"8",
  3413:"8",
  3414:"24",
  3415:"8",
  34024:"8192",
  3386:"[8192, 8192]",
  3379:"8192",
  34076:"8192",
  35661:"32",
  34047:"16",
  32883:"8192",
  35071:"8192",
  34045:"12",
  35375:"24",
  35376:"16384",
  35380:"4",
  35374:"24",
  35377:"50188",
  35379:"50060"
};



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
    "35380" : "MREH", //UNIFORM_BUFFER_OFFSET_ALIGNMENT
    "35374" : "MREH", //MAX_COMBINED_UNIFORM_BLOCKS    
    "35373" : "MREH", //MAX_FRAGMENT_UNIFORM_BLOCKS
    "35371" : "MREH", //MAX_VERTEX_UNIFORM_BLOCKS
    "35071" : "MREH", //MAX_ARRAY_TEXTURE_LAYERS
    "34930" : "MREH", //MAX_COMBINED_TEXTURE_IMAGE_UNITS
    "34852" : "MREH", //MAX_DRAW_BUFFERS
    "36183" : "MREH", //MAX_SAMPLES
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
    "2928"  : "MREH", //DEPTH_RANGE


    "256"   : "MREH", //DEPTH_BUFFER_BIT
    "16384" : "MREH", //COLOR_BUFFER_BIT
    "2929"  : "MREH", //DEPTH_TEST


    "35077" : "MREH", //MAX_PROGRAM_TEXEL_OFFSET
    "35076" : "MREH", //MIN_PROGRAM_TEXEL_OFFSET
    "34047" : "MREH" //MAX_TEXTURE_MAX_ANISOTROPY_EXT

    /*  FRAMEBUFFER: 36160
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050
        FRAMEBUFFER_BINDING: 36006
        FRAMEBUFFER_COMPLETE: 36053
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055
        FRAMEBUFFER_UNSUPPORTED: 36061
    */


  };

  var ShaderPrecisionSpoofedValues = { 
    rangeMin: 127, 
    rangeMax: 127, 
    precision: 23 
  };

  //"HIGH_FLOAT"
  //"HIGH_INT"
  var FloatIntPrecisionValues = {
    rangeMin: 121, 
    rangeMax: 121, 
    precision: 6
  };

  var WebGLContextAttributesSpoofed = {
    alpha: false,
    antialias: false,
    depth: false,
    desynchronized: false,
    failIfMajorPerformanceCaveat: true,
    powerPreference: "MREH",
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    stencil: true,
    xrCompatible: true
  }

  var WebGLSupportedExtensionsSpoofed =["ANGLE_instanced_arrays", "EXT_blend_minmax"];
  
  var WebGLDebugRendererInfoSpoofed = {
    UNMASKED_RENDERER_WEBGL: 37446,
    UNMASKED_VENDOR_WEBGL: 37445
  };

  var WebGLAttribLocation = {

  };

  var WebGLUniformLocation = {

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
              console.log("Here we are applying webgl fingerprint --- IMAGE HASH");
              return bufferData.apply(this, arguments);
            }

          });
        },
        "getAttribLocation": function(target) {
           const getAttribLocation = target.prototype.getAttribLocation;
           Object.defineProperty(target.prototype, "getAttribLocation", {
              "value": function() {
                //depending upon arguments[0]
                return WebGLAttribLocation;
                //return getAttribLocation.apply(this, arguments);
              }
           });
        
        },
        "getUniformLocation": function(target) {
           const getUniformLocation = target.prototype.getUniformLocation;
           Object.defineProperty(target.prototype, "getUniformLocation", {
              "value": function() {
                 //depending upon arguments[0]
                return WebGLUniformLocation;
                //return getUniformLocation.apply(this, arguments);
              }
           });
        
        },
        "getExtensions": function(target) {
           const getExtensions = target.prototype.getExtensions;
           Object.defineProperty(target.prototype, "getExtensions", {
              "value": function() {

                //EXT_texture_filter_anisotropic
                //WEBKIT_EXT_texture_filter_anisotropic
                //MOZ_EXT_texture_filter_anisotropic

                if( arguments[0] === 'WEBGL_debug_renderer_info'){
                  return WebGLSupportedExtensionsSpoofed;
                }
                
                return getExtensions.apply(this, arguments);
              }
           });
        
        },
        "getSupportedExtensions": function(target) {
           const getSupportedExtensions = target.prototype.getSupportedExtensions;
           Object.defineProperty(target.prototype, "getSupportedExtensions", {
              "value": function() {
                return WebGLSupportedExtensionsSpoofed;
                //return getSupportedExtensions.apply(this, arguments);
              }
           });
        
        },

        "getContextAttributes": function(target) {
           const getContextAttributes = target.prototype;

           Object.defineProperty(target.prototype, "getContextAttributes", {
              "value": function() {
                return WebGLContextAttributesSpoofed;
                //return getSupportedExtensions.apply(this, arguments);
              }
           });
        
        },
        

        /*"shaderPrecisionFormat" : function(target) {
          const WebGLShaderPrecisionFormat = target.prototype;
          console.log("Here " + WebGLShaderPrecisionFormat["get precision"]);
          Object.defineProperty(target.prototype, "get precision", {
            
            "value": function() {
                
                console.log("Here we are checking the precision values " + arguments[0] + arguments[1]);
                //eturn WebGLShaderPrecisionFormat.apply(this, arguments);
                return WebGLShaderPrecisionFormat.apply(this,arguments);
            }

          });

        },*/

        "getShaderPrecisionFormat" : function (target) {
          const getShaderPrecisionFormat = target.prototype;
          Object.defineProperty(target.prototype, "getShaderPrecisionFormat", {

            "value": function() {
              // 36338: "HIGH_FLOAT"
              // 36341: "HIGH_INT"
              // 36337: "MEDIUM_FLOAT"

              if ( (arguments[1] === 36338 ) ||( arguments[1] === 36341) ){
                return FloatIntPrecisionValues;
              } else 
              return ShaderPrecisionSpoofedValues;
            }

          });

        },

        "parameter": function (target) {          
          const getParameter = target.prototype.getParameter;
          Object.defineProperty(target.prototype, "getParameter", {
            
            "value": function () {

              if ( WebGLSpoofedValues[arguments [0]] != undefined ){          
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


  //SPOOFING THE GETSHADERPRECISIONVALUES
  config.spoof.webgl.getShaderPrecisionFormat(WebGLRenderingContext);
  config.spoof.webgl.getShaderPrecisionFormat(WebGL2RenderingContext);


  //SPOOFING SHADER PRECISION FORMAT
  //config.spoof.webgl.shaderPrecisionFormat(WebGLShaderPrecisionFormat);
  

  //SPOOFING THE WEBGL PARAMETER VALUES
  config.spoof.webgl.parameter(WebGLRenderingContext);
  config.spoof.webgl.parameter(WebGL2RenderingContext);
  
  //SPOOFING THE WEBGL GETATTRIBLOCATION
  config.spoof.webgl.getAttribLocation(WebGLRenderingContext);
  config.spoof.webgl.getAttribLocation(WebGL2RenderingContext);
  

  //SPOOFING WEBGL EXTENSIONS
  config.spoof.webgl.getSupportedExtensions(WebGLRenderingContext);
  config.spoof.webgl.getSupportedExtensions(WebGL2RenderingContext);
  config.spoof.webgl.getExtensions(WebGLRenderingContext);
  config.spoof.webgl.getExtensions(WebGL2RenderingContext);
  
  
  //SPOOFING WEBGL CONTEXT ATTRIBUTES
  config.spoof.webgl.getContextAttributes(WebGLRenderingContext);
  config.spoof.webgl.getContextAttributes(WebGL2RenderingContext);

  document.documentElement.dataset.wgscriptallow = true;

};



// INJECTING INTO THE SCRIPT
var script_1 = document.createElement("script");
script_1.textContent = "(" + inject + ")()";
document.documentElement.appendChild(script_1);


var inject = function() {


    //the three values that need to be changed for font spoofing; hence we obtain the original values for them

    var originalStyleSetProperty = CSSStyleDeclaration.prototype.setProperty
    var originalSetAttrib = Element.prototype.setAttribute
    var originalNodeAppendChild = Node.prototype.appendChild


    function defineobjectproperty(val, e, c, w) {

        // this is an object describing a property, hence has all the description attributes
        return {
            value: val,
            enumerable: !!e,
            configurable: !!c,
            writable: !!w
        }
    };


    var DEFAULT = 'auto'

    //this is going to be our spoofing list 
    var spoofedfontlist = ["Arial","Cambria Math","Candara","Comic Sans MS","Comic Sans MS Bold","Comic Sans","Consolas","Constantia","Corbel","Courier New","Caurier Regular","Ebrima","Fixedsys Regular","Franklin Gothic","Gabriola Regular","Gadugi","Georgia","HoloLens MDL2 Assets Regular","Impact Regular","Javanese Text Regular","Leelawadee UI","Lucida Console Regular","Lucida Sans Unicode Regular","Malgun Gothic","Microsoft Himalaya Regular","Microsoft JhengHei","Microsoft JhengHei UI","Microsoft PhangsPa","Microsoft Sans Serif Regular","Microsoft Tai Le","Microsoft YaHei","Microsoft YaHei UI","Microsoft Yi Baiti Regular","MingLiU_HKSCS-ExtB Regular","MingLiu-ExtB Regular","Modern Regular","Mongolia Baiti Regular","MS Gothic Regular","MS PGothic Regular","MS Sans Serif Regular","MS Serif Regular","MS UI Gothic Regular","MV Boli Regular","Myanmar Text","Nimarla UI","MV Boli Regular","Myanmar Tet","Nirmala UI","NSimSun Regular","Palatino Linotype","PMingLiU-ExtB Regular","Roman Regular","Script Regular","Segoe MDL2 Assets Regular","Segoe Print","Segoe Script","Segoe UI","Segoe UI Emoji Regular","Segoe UI Historic Regular","Segoe UI Symbol Regular","SimSun Regular","SimSun-ExtB Regular","Sitka Banner","Sitka Display","Sitka Heading","Sitka Small","Sitka Subheading","Sitka Text","Small Fonts Regular","Sylfaen Regular","Symbol Regular","System Bold","Tahoma","Terminal","Times New Roman","Trebuchet MS","Verdana","Webdings Regular","Wingdings Regular","Yu Gothic","Yu Gothic UI","Arial","Arial Black","Calibri","Calibri Light","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier","Courier New","Ebrima","Fixedsys","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Javanese Text","Leelawadee UI","Leelawadee UI Semilight","Lucida Console","Lucida Sans Unicode","MS Gothic","MS PGothic","MS Sans Serif","MS Serif","MS UI Gothic","MV Boli","Malgun Gothic","Malgun Gothic Semilight","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft JhengHei Light","Microsoft JhengHei UI","Microsoft JhengHei UI Light","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft YaHei Light","Microsoft YaHei UI","Microsoft YaHei UI Light","Microsoft Yi Baiti","MingLiU-ExtB","MingLiU_HKSCS-ExtB","Modern","Mongolian Baiti","Myanmar Text","NSimSun","Nirmala UI","Nirmala UI Semilight","PMingLiU-ExtB","Palatino Linotype","Roman","Script","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Black","Segoe UI Emoji","Segoe UI Historic","Segoe UI Light","Segoe UI Semibold","Segoe UI Semilight","Segoe UI Symbol","SimSun","SimSun-ExtB","Sitka Banner","Sitka Display","Sitka Heading","Sitka Small","Sitka Subheading","Sitka Text","Small Fonts","Sylfaen","Symbol","System","Tahoma","Terminal","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic","Yu Gothic Light","Yu Gothic Medium","Yu Gothic UI","Yu Gothic UI Light","Yu Gothic UI Semibold","Yu Gothic UI Semilight"].map(function(x){return x.toLowerCase()});
    




    var baseFonts= ["auto"]
    //keywords inherit and auto refer to -- https://stackoverflow.com/questions/53577135/inherit-font-family-property-if-font-not-available
    //var keywords = ["inherit", "auto"]
    
    baseFonts.push.apply(baseFonts, spoofedfontlist)
    //baseFonts.push.apply(baseFonts, keywords)


    function filterFontList(family) {

        var fonts = family.replace(/"|'/g,'').split(',')

        //New function that filters fontlists and get the allowed fonts.
        var filteredFonts = fonts.filter(function(font) {

            if(font && font.length) {
                var normalised = font.trim().toLowerCase();

                for(var allowed of baseFonts)
                    if(normalised == allowed) 
                        return true;

                for (var allowed of document.fonts.values())
                    if(normalised == allowed) 
                        return true;
            }
        });

        return filteredFonts.map(   
            
            function(f){

                var trimmed = f.trim()
                return ~trimmed.indexOf(' ') ? "'" + trimmed + "'" : trimmed }).join(", ");


    }

    

    function modifiedCssSetProperty(key, val) {

        if(key.toLowerCase() == 'font-family') {

            var keyresult = key.toLowerCase();
            var allowed = filterFontList(val);
            var oldFF = this.fontFamily;
                            
            return originalStyleSetProperty.call(this, 'font-family', allowed /* || DEFAULT*/)
        }

        return originalStyleSetProperty.call(this, key, val)
    }


    function makeModifiedSetCssText(originalSetCssText) {

        return function modifiedSetCssText(css) {

            
            var fontFamilyMatch = css.match(/\b(?:font-family:([^;]+)(?:;|$))/i);
            if(fontFamilyMatch && fontFamilyMatch.length == 1) {

                css = css.replace(/\b(font-family:[^;]+(;|$))/i, '').trim()
                
                var allowed = filterFontList(fontFamilyMatch[1])/* || DEFAULT*/;

                if(css.length && css[css.length - 1] != ';')
                    css += ';'
                css += "font-family: " + allowed + ";"
            }


            return originalSetCssText.call(this, css)
        }
    }


    //recursively call the modifiedsetattribute in a IIFE block
    var modifiedSetAttribute = (function() {

        var innerModify = makeModifiedSetCssText(function (val) {
            return originalSetAttrib.call(this, 'style', val)
        });

        return function modifiedSetAttribute(key, val) {
            if(key.toLowerCase() == 'style') {
                return innerModify.call(this, val)
            }
            return originalSetAttrib.call(this, key, val)
        };

    })();
    


    
    function recursivelyModifyFonts(element) {
        if(element) {


            if(element.style && element.style.fontFamily) {

                modifiedCssSetProperty.call(element.style, 'font-family', element.style.fontFamily) // Uses the special setter
            }

            if(element.childNodes)
                element.childNodes.forEach(recursivelyModifyFonts)
        

        }
        //return the element after modification
        return element;
    }

    function modifiedAppend(child) {
        
        //we do this everytime we add to the DOM tree =) 

        child = recursivelyModifyFonts(child)
        return originalNodeAppendChild.call(this, child)
    }



    function makeModifiedInnerHTML(originalInnerHTML) {

        //hooked the innerhtml code, so that right before we add it to DOM we modify its available fonts.         
        return function modifiedInnerHTML(html) {

            //Add as normal, then fix before returning
            var retval = originalInnerHTML.call(this, html)
            recursivelyModifyFonts(this.parentNode)

            return retval
        }
    }


    //success flag ! 
    var success = true
    

    //generic function override 
    function overrideFunc(obj, name, f) {
        try {

            Object.defineProperty(obj.prototype, name, defineobjectproperty(f, true))
        
        } catch(e) {
            success=false;
        }
    }
    
    //generic override setters 
    function overrideSetter(obj, name, makeSetter) {
    
        try {
            
            var current = Object.getOwnPropertyDescriptor(obj.prototype, name)
            current.set = makeSetter(current.set)
            current.configurable = false
            Object.defineProperty(obj.prototype, name, current)

        } catch(e) {
            success=false;

        }
    }


    // listing the functions to be overridden taking input in the form of element, property/attribute and modified function for it
    overrideFunc(Node, 'appendChild', modifiedAppend);
    overrideFunc(CSSStyleDeclaration, 'setProperty', modifiedCssSetProperty);
    overrideFunc(Element, 'setAttribute', modifiedSetAttribute);
    


    //modifying both setter and geetter for CSSStyleDeclaration separately ---> 
    try {
        Object.defineProperty(CSSStyleDeclaration.prototype, "fontFamily", {
            set: function fontFamily(f) {
                modifiedCssSetProperty.call(this, 'font-family', f)
            },
            get: function fontFamily() {
                return this.getPropertyValue('font-family')
            }
        })
    } catch(e) {
        success=false;
    }
    
    
    overrideSetter(CSSStyleDeclaration,'cssText', makeModifiedSetCssText);
    overrideSetter(Element,'innerHTML', makeModifiedInnerHTML);
    overrideSetter(Element,'outerHTML', makeModifiedInnerHTML);
    


    /*var overwriteCSSStyleDeclaration = function(name) {

        const oldcss = CSSStyleDeclaration.prototype[name];  
        Object.defineProperty(CSSStyleDeclaration.prototype, name, {

            "value": function() {
                
                
                
                
                context.putImageData(oldcss, 0, 0);
                return oldcsss.apply(this, arguments);
            }
        });
    };



    

    var overwriteElement = function(name) {

        const oldcanvas = Element.prototype[name];  
        
        });
    };

    var overwriteNode = function(name) {

        const oldcanvas = Node.prototype[name];  
        Object.defineProperty(Node.prototype, name, {

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

    overwriteCSSStyleDeclaration('setProperty');
    overwriteElement('setAttribute');
    overwriteNode('appendChild');

    //var originalSetAttrib = Element.prototype.setAttribute
    //var originalNodeAppendChild = Node.prototype.appendChild
    
    */


    document.documentElement.dataset.cbscriptallow = true;
}

// INJECTING INTO THE SCRIPT
var script_1 = document.createElement('script');
script_1.textContent = "(" + inject + ")()";
document.documentElement.appendChild(script_1);


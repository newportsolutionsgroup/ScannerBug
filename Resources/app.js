
var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var btn = Ti.UI.createButton({
    title: 'Scan Document'
});

btn.addEventListener('click', function () {
    Ti.Media.requestCameraPermissions(event => {
        if (!event.success) {
            alert('No camera permissions');
            return;
        }
        scanDocument();
    });
});

win.add(btn);
win.open();

function scanDocument(){
    try{
        Ti.API.debug("Function scanDocument()");    
        Ti.API.debug("- initializing Scanner");    

        var Scanner = require('ti.scanner');

        Scanner.addEventListener('cancel', function () {
            alert('Scanner Cancelled');
        });

        Scanner.addEventListener('error', function (event) {
            alert('Scanner Error' + JSON.stringify(event));
        });

        Scanner.addEventListener('success', function (result) {
            alert('Scanner.Succeeded() ' + JSON.stringify(result) );
        });  
        
        Scanner.showScanner();  
        
    }
    catch(error)
    {
        Ti.API.error("Error in function scanDocument(): " + error);    
        alert('Error scanning document. ' + error );
    }    
}

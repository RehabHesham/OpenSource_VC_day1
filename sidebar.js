console.log ("Create Sidebar Logic");

var hideSataus = true;

function toggleSidebar() {
    if (hideSataus) {
        console.log("Show Sidebar");
        hideSataus = false;
    }else{
        console.log("Hide Sidebar");
        hideSataus = true;
    }
}
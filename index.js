console.log('hello world');

// document.addEventListener('DOMContentLoaded', function() {

//     console.log("DOM fully loaded and parsed!");
// });
// import { jsPDF } from "jspdf";
// import "jspdf/dist/polyfills.es.js";
// const { jsPDF } = require("jspdf"); // will automatically load the node version

const doc = new jsPDF();


function createPDF(){
    
    // Default export is a4 paper, portrait, using millimeters for units
    
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
}
// createPDF()







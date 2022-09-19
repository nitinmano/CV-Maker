const editCv = () => {
    document.getElementById('name').contentEditable = 'true';
    document.getElementById('title').contentEditable = 'true';
    document.getElementById('sidebarContent').contentEditable = 'true';
    document.getElementById('contentBar').contentEditable = 'true';


    // loop res_details
    let res_details = document.getElementsByClassName('res_details');
    for (let i = 0; i < res_details.length; i++) {
        res_details[i].contentEditable = 'true';
    }
    
    var id=document.getElementById("img_clk");
    id.onclick = function() {id.src=prompt();};
}
const printPage = () => {
    var prtContent = document.getElementById("cv-container");
    var WinPrint = window.open('', '',);
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}


function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    // add bootstrap css
    WinPrint.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />');
    WinPrint.document.write('<link rel="stylesheet" href="style.css" type="text/css" />');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}


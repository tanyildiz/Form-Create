/*
edited the code from https://www.encodedna.com/javascript/dynamically-add-remove-rows-to-html-table-using-javascript-and-save-data.htm
*/

var cell = '<input type="text" class="form-control-plaintext">';
var removeButton = '<button type="button" onclick="removeRow(this)" class="btn btn-danger btn-sm">Satır Sil</button>';
var optSelect = document.getElementById("select");
var val = 0;
var createButtonDisabled = document.getElementById("create-table");


function createEmptyTable() {
  if (document.getElementById("empty-table")) {
    var element = document.getElementById("empty-table");
    element.parentNode.removeChild(element);
  }
  
  var emptyTable = document.createElement('table');
  emptyTable.setAttribute('id', 'empty-table');
  emptyTable.setAttribute('class','table-bordered');
  var newVal = optSelect.options[optSelect.selectedIndex].value;
  val = newVal;
  var tr = emptyTable.insertRow(-1);
    
  for (var h = 0; h < newVal; h++) {
    var td = document.createElement('td');
      td.innerHTML = cell;
      tr.appendChild(td);
    }
  var div = document.getElementById('cont');
  div.appendChild(emptyTable);
  
  createButtonDisabled.disabled = true;
}

function valueChanged() {
  var newVal = document.getElementById("select").value;
    if (newVal != val) {
      createButtonDisabled.disabled = false;
    }
}

function createRow() {
  var calTable = document.getElementById('empty-table');
  
  var rowCnt = calTable.rows.length;
  var tr = calTable.insertRow(rowCnt);
  tr = calTable.insertRow(rowCnt);

 
  for (var c = 0; c <= val; c++) {
    var td = document.createElement('td');
    td = tr.insertCell(c);
    if (c == val) {
      td.innerHTML = removeButton;
      tr.appendChild(td);
      
    } else {
      td.innerHTML = cell;
      tr.appendChild(td);
    }
  }
}

function removeRow(oButton) {
  var empTab = document.getElementById('empty-table');
  empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit() {
  var myTab = document.getElementById('empty-table');
  var values = new Array();

  // LOOP THROUGH EACH ROW OF THE TABLE.
  for (row = 0; row < myTab.rows.length - 1; row++) {
    for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

      var element = myTab.rows.item(row).cells[c];
      if (element.childNodes[0].getAttribute('type') == 'text') {
        values.push(element.childNodes[0].value);
      }
    }
  }
  console.log(values);
}
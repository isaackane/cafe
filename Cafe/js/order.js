var arrObj = [{"firstName":"John", "lastName":"Doe", "age":"46"},
 {"firstName":"James", "lastName":"Blanc", "age":"24"}]
 var objLength = arrObj.length;
var myvar = '<table>'+
'<tr>'+
'<th>firstName</th>'+
'<th>last Name</th>'+
'<th>age</th>'+
'</tr>';

 for(var i = 0; i < objLength; i++){
myvar += '<tr>'+
'<td>'+arrObj[i].firstName+'</td>'+
'<td>'+arrObj[i].lastName+'</tD>'+
'<td>'+arrObj[i].age+'</th>'+
'</tr>'     
 }

 myvar += '</table>';

console.log(myvar);
 document.getElementById('myTable').innerHTML = myvar;
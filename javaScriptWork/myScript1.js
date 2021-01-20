function goodbye() {
	window.alert("JavaScript test!");
}

function mouseOver(obj) {
	obj.innerHTML = "Hello JavaScript";
	obj.style.color = "black" ;
}

function mouseOut(obj) {
	obj.innerHTML = "Name";
	obj.style.color = "red" ;
}

function addRow(){
	let tableTemp = document.getElementById('tableTest');
	let newRow = tableTemp.insertRow();
	let newcell0 = newRow.insertCell();
	var element1 = document.createElement("input");
    element1.type = "checkbox";
    newcell0.appendChild(element1);
	newRow.insertCell();
	newRow.insertCell();
	newRow.insertCell();
}

function deleteRow(){
	let tableTemp = document.getElementById('tableTest');
	var row_num = tableTemp.rows.length;
	for (var i = 0; i < row_num; i++) {
		if(tableTemp.rows[i].cells[0].childNodes[0].checked){
			tableTemp.deleteRow(i);
			row_num--;
            i--;
		}
	}
}

function editRow(){
	let tableTemp = document.getElementById('tableTest');
	var row_num = tableTemp.rows.length;
	for (var i = 0; i < row_num; i++) {
		let rowT = tableTemp.rows[i];
		if(rowT.cells[0].childNodes[0].checked){
			rowT.cells[1].innerHTML = "afteredit" + i;
		}
	}
}

function addc(){
	var filetemp = document.getElementById('filetemp1');
	var textarea1 = document.getElementById('textarea1');
	var img1 = document.getElementById('img');
	filetemp.addEventListener( 'change', function(e) {
	    var result = e.target.files[0];

	    //FileReaderのインスタンスを作成する
	    var reader = new FileReader();

	    //読み込んだファイルの中身を取得する
		//reader.readAsText( result );
		reader.readAsDataURL(result);

	    //ファイルの中身を取得後に処理を行う
	    reader.addEventListener( 'load', function() {
	        //ファイルの中身をtextarea内に表示する
			//textarea1.textContent = reader.result;
			img1.src = reader.result;
			console.log(img1.src);
	    })
	})
}

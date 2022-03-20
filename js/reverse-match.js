// common js - start
// for custom select options
for (const dropdown of document.querySelectorAll(".select_wrapper")) {
	dropdown.addEventListener("click", function () {
		this.querySelector(".select_container").classList.toggle("open");
	});
}

for (const option of document.querySelectorAll(".select_custom_option")) {
	option.addEventListener("click", function () {
		if (!this.classList.contains("selected")) {
			const selectedEle = this.parentNode.querySelector(
				".select_custom_option.selected"
			);
			if (selectedEle) {
				selectedEle.classList.remove("selected");
			}
			this.classList.add("selected");

			this.closest(".select_container")
				.querySelector(".select__trigger")
				.classList.add("selected");
			this.closest(".select_container").querySelector(
				".select__trigger span"
			).textContent = this.textContent;
		}
	});
}

document.addEventListener("click", function (e) {
	for (const select of document.querySelectorAll(".select_container")) {
		if (!select.contains(e.target)) {
			select.classList.remove("open");
		}
	}
});

// common js - end

// reverse match - start
var tableData = [
	{
		name: "Isabella Haywood-Jasmine Haywood-Toddler-Active",
		startDate: "5/15/2020",
		primaryCenter: "Day Early Learning at Eastern Star Church",
		secondaryCenter: "Day Early Learning Purdue University",
		points: "100",
	},
	{
		name: "Darryl Harvey-Ronald Sandlin-Infant-Match",
		startDate: "1/20/2023",
		primaryCenter: "Day Early Learning Purdue University",
		secondaryCenter: "Day Early Learning at IU Health, Select item 5",
		points: "98",
	},
	{
		name: "Pebbles Flinstone-Joel Austin-Two YO-Active",
		startDate: "1/19/2022",
		primaryCenter: "Day Early Learning at IU Health",
		secondaryCenter: "Day Early Learning at Park 100",
		points: "94",
	},
	{
		name: "Elijah Avery Cobon-Jason Handberg-Two YO-Match",
		startDate: "3/15/2022",
		primaryCenter: "Day Early Learning at Park 100",
		secondaryCenter: "Day Early Learning at Eastern Star Church",
		points: "92",
	},
];

var selectedRowIndex = -1;

// util function to crate dynamic table
function createTable() {
	// (C) CREATE HTML TABLE
	// (C1) HTML TABLE STRING
	var myTable = `<table class="table data_table"> 
			<thead> 
				<tr> 
					<th style="width: 0px"></th>
					<th scope="col">OPPORTUNITY NAME</th> 
					<th scope="col">DESIRED START DATE</th> 
					<th scope="col">PRIMARY CENTER</th> 
					<th scope="col">SECONDARY CENTER</th> 
					<th scope="col">PRIORITY POINTS</th> 					
				</tr> 
			</thead> 
		<tbody>`;

	tableData.forEach((item, i) => {
		// START NEW ROW
		myTable += `<tr onclick="handleSelectRow(${i})" class="${
			selectedRowIndex === i ? "selected_row" : ""
		}">`;

		// "NORMAL" CELL
		myTable += `<td class="check_box_row">
			<img src="${
				selectedRowIndex === i
					? "images/check_ring_round_light_selected.svg"
					: "images/check_ring_round_light.svg"
			}" />
		</td>`;
		myTable += `<td>${item.name}</td>`;
		myTable += `<td>${item.startDate}</td>`;
		myTable += `<td>${item.primaryCenter}</td>`;
		myTable += `<td>${item.secondaryCenter}</td>`;
		myTable += `<td>${item.points}</td>`;

		// CLICK ON CELL TO DO SOMETHING
		// myTable += `<td onclick="FUNCTION()">${value}</td>`;

		// TO PASS IN A RUNNING NUMBER OR PARAMETER
		// myTable += `<td onclick="FUNCTION(${i})">${value}</td>`;

		// BREAK INTO NEXT ROW
		myTable += "</tr>";
	});

	// (C3) CLOSE THE TABLE STRING
	myTable += "</tbody> </table>";

	// (D) ATTACH HTML TO CONTAINER
	document.getElementById("dataTable").innerHTML = myTable;
}

// onchange of business group
function handleChangeBusinessGroup(event) {
	var value = event.target.dataset.value;
	console.log(value);

	document.getElementById("emptyList").style.display = "none";
	createTable();
}

// select a row
function handleSelectRow(index) {
	// console.log(index);
	selectedRowIndex = index;
	createTable();
	document
		.getElementById("confirmSelection")
		.classList.add("confirm_btn_active");
}

// onclick of cancel button
function handleCancelSelectRow() {
	if (selectedRowIndex != -1) {
		selectedRowIndex = -1;
		createTable();
		document
			.getElementById("confirmSelection")
			.classList.remove("confirm_btn_active");
	}
}

// reverse match - end

// transition - start
// onload init
function transitionInit() {
	console.log("init");
	document.getElementById("dataListLeft").style.display = "none";
	document.getElementById("dataListRight").style.display = "none";
}

// onchange of centre
function handleChangeCentreLeft(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListLeft").style.display = "none";
	document.getElementById("dataListLeft").style.display = "block";
}

// onchange of centre
function handleChangeCentreRight(event) {
	// var value = event.target.dataset.value;
	// console.log(value);

	document.getElementById("emptyListRight").style.display = "none";
	document.getElementById("dataListRight").style.display = "block";
}

const selectedShortIcons = document.querySelectorAll(".trans_shorts");
for (let i = 0; i < selectedShortIcons.length; i++) {
	selectedShortIcons[i].addEventListener(
		"click",
		function () {
			// this.classList.toggle("down");
			const selectedEle = this.parentNode.querySelector(".rotate_icon");
			if (selectedEle) {
				selectedEle.classList.toggle("down");
			}
		},
		false
	);
}

// transition - end

// find-match - start
const selectedRows = document.querySelectorAll(".row_select");

for (let i = 0; i < selectedRows.length; i++) {
	selectedRows[i].addEventListener(
		"click",
		function () {
			// multi selection
			// this.classList.toggle("selected_row");

			// single selection
			const selectedEle = this.parentNode.querySelector(".selected_row");
			// console.log("selectedEle", selectedEle);
			if (selectedEle) {
				// console.log("removed");
				selectedEle.classList.remove("selected_row");
			}
			this.classList.add("selected_row");
		},
		false
	);
}
// find-match - end

// seat-distribution -start
function seatDistributionInit() {
	console.log("init");
	document.getElementById("dataTable").style.display = "none";
}
// onchange of seat distribution
function handleChangeForSeatDistribution(event) {
	var value = event.target.dataset.value;
	console.log(value);

	document.getElementById("emptyList").style.display = "none";
	document.getElementById("dataTable").style.display = "block";
}

// seat-distribution -end

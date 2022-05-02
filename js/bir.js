// on click of left panel close double arrow
function toggleLeftSidebar(event) {
	const templeteLayout = document.querySelectorAll(".templete_layout");
	if (templeteLayout.length != 0) {
		templeteLayout[0].classList.toggle("templete_layout_left_collapse");
	}
}

// on click of left panel close double arrow
let prevClicked = "none";
function toggleRightSidebar(action = "none") {
	const templeteLayout = document.querySelectorAll(".templete_layout");
	if (templeteLayout.length != 0) {
		if (prevClicked === "none") {
			templeteLayout[0].classList.toggle("templete_layout_right_collapse");
			prevClicked = action;
		} else if (prevClicked === action) {
			templeteLayout[0].classList.toggle("templete_layout_right_collapse");
			prevClicked = action;
		} else if (prevClicked !== action) {
			templeteLayout[0].classList.remove("templete_layout_right_collapse");
			templeteLayout[0].classList.toggle("templete_layout_right_collapse");
			prevClicked = action;
		}
	}
	if (action === "assignees") {
		document.getElementById("broadcastBody").classList.add("d-none");
		document.getElementById("assigneesBody").classList.toggle("d-none");
		document
			.getElementById("activeAssignees")
			?.classList.toggle("active_assignees");

		document
			.getElementById("activeAssigneesTablet")
			?.classList.toggle("active_assignees");
	} else if (action === "broadcast") {
		document.getElementById("assigneesBody").classList.add("d-none");
		document.getElementById("broadcastBody").classList.toggle("d-none");
		document
			.getElementById("activeAssignees")
			?.classList.remove("active_assignees");

		document
			.getElementById("activeAssigneesTablet")
			?.classList.remove("active_assignees");
	}
}

// dashboard
function dashboardInit() {
	document.getElementById("tab_1").classList.toggle("db_tab_heading_active");
	document.getElementById("tab_1_data").classList.toggle("d-block");

	document.getElementById("tab_2_data").classList.toggle("d-none");
	document.getElementById("tab_3_data").classList.toggle("d-none");
	document.getElementById("tab_4_data").classList.toggle("d-none");
}

function activeDashboardTab(tabNumber) {
	if (tabNumber === 1) {
		document.getElementById("tab_1").classList.toggle("db_tab_heading_active");
		document.getElementById("tab_1_data").classList.toggle("d-none");
	} else if (tabNumber === 2) {
		document.getElementById("tab_2").classList.toggle("db_tab_heading_active");
		document.getElementById("tab_2_data").classList.toggle("d-none");
	} else if (tabNumber === 3) {
		document.getElementById("tab_3").classList.toggle("db_tab_heading_active");
		document.getElementById("tab_3_data").classList.toggle("d-none");
	} else if (tabNumber === 4) {
		document.getElementById("tab_4").classList.toggle("db_tab_heading_active");
		document.getElementById("tab_4_data").classList.toggle("d-none");
	}
}

function toggleAddButtonPopup() {
	document.getElementById("addButtonPopup").classList.toggle("d-none");
	document.getElementById("addButtonIcon").classList.toggle("add_button_icon");
}

function toggleSubHeaderMe() {
	document.getElementById("activeMe")?.classList.toggle("active_me");
	document.getElementById("activeMeTablet")?.classList.toggle("active_me");
	document.getElementById("noDataItem1")?.classList.toggle("d-none");
	document.getElementById("withDataItem1")?.classList.toggle("d-none");
	document.getElementById("withDataItem2")?.classList.toggle("d-none");
}

function addWhereFilter() {
	document.getElementById("addWhereFilter").classList.remove("d-none");
}

function removeWhereFilter() {
	document.getElementById("addWhereFilter").classList.add("d-none");
}

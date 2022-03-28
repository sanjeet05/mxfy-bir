// on click of left panel close double arrow
function toggleLeftSidebar(event) {
	const templeteLayout = document.querySelectorAll(".templete_layout");
	if (templeteLayout.length != 0) {
		templeteLayout[0].classList.toggle("templete_layout_collapse");
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

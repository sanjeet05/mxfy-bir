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

// on click of left panel close double arrow
function toggleLeftSidebar(event) {
	const templeteLayout = document.querySelectorAll(".templete_layout");
	if (templeteLayout.length != 0) {
		templeteLayout[0].classList.toggle("templete_layout_left_collapse");
	}
	document.getElementById("reportDropDown")?.classList.toggle("d-none");
	document.getElementById("reportDropDownItem1")?.classList.toggle("d-none");
	document.getElementById("reportDropDownItem2")?.classList.toggle("d-none");
	document.getElementById("reportDropDownItem3")?.classList.toggle("d-none");
	document.getElementById("reportDropDownItem4")?.classList.toggle("d-none");
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

	document.getElementById("tab_2_data")?.classList.toggle("d-none");
	document.getElementById("tab_3_data")?.classList.toggle("d-none");
	document.getElementById("tab_4_data")?.classList.toggle("d-none");

	document
		.getElementById("modal_tab_1")
		.classList.toggle("db_tab_heading_active");
	document.getElementById("modal_tab_1_data").classList.toggle("d-block");

	document.getElementById("modal_tab_2_data").classList.toggle("d-none");
	document.getElementById("modal_tab_3_data").classList.toggle("d-none");
	document.getElementById("modal_tab_4_data").classList.toggle("d-none");
	document.getElementById("modal_tab_5_data").classList.toggle("d-none");
	document.getElementById("modal_tab_6_data").classList.toggle("d-none");
	document.getElementById("modal_tab_7_data").classList.toggle("d-none");
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

function handleModalSearch() {
	document.getElementById("modalEmpty").classList.add("d-none");
	document.getElementById("modalData").classList.remove("d-none");
	document
		.getElementById("createReport")
		.classList.remove("modal_save_btn_dis");
}

function activeModalDashboardTab(tabNumber) {
	if (tabNumber === 1) {
		document
			.getElementById("modal_tab_1")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_1_data").classList.toggle("d-none");
	} else if (tabNumber === 2) {
		document
			.getElementById("modal_tab_2")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_2_data").classList.toggle("d-none");
	} else if (tabNumber === 3) {
		document
			.getElementById("modal_tab_3")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_3_data").classList.toggle("d-none");
	} else if (tabNumber === 4) {
		document
			.getElementById("modal_tab_4")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_4_data").classList.toggle("d-none");
	} else if (tabNumber === 5) {
		document
			.getElementById("modal_tab_5")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_5_data").classList.toggle("d-none");
	} else if (tabNumber === 6) {
		document
			.getElementById("modal_tab_6")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_6_data").classList.toggle("d-none");
	} else if (tabNumber === 7) {
		document
			.getElementById("modal_tab_7")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_tab_7_data").classList.toggle("d-none");
	}
}

function activeModalBagTab(tabNumber) {
	if (tabNumber === 1) {
		document
			.getElementById("modal_bag_tab_1")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_bag_tab_1_data").classList.toggle("d-none");
	} else if (tabNumber === 2) {
		document
			.getElementById("modal_bag_tab_2")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_bag_tab_2_data").classList.toggle("d-none");
	} else if (tabNumber === 3) {
		document
			.getElementById("modal_bag_tab_3")
			.classList.toggle("db_tab_heading_active");
		document.getElementById("modal_bag_tab_3_data").classList.toggle("d-none");
	}
}

function toggleBagTraceFilter() {
	document.getElementById("bagTraceRightSideFilter")?.classList.toggle("d-none");
}

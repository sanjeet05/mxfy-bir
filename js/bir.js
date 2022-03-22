// on click of left panel close double arrow
function toggleLeftSidebar(event) {
	const templeteLayout = document.querySelectorAll(".templete_layout");
	if (templeteLayout.length != 0) {
		templeteLayout[0].classList.toggle("templete_layout_collapse");
	}
}

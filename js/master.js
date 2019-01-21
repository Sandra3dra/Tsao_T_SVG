(() => {
	var badge = document.querySelector("#badge");
		
	var allTheBadges = document.querySelectorAll(".isabadge");

	function logMyId() {
		console.log(this.id);
		//debugger;
	}

	badge.addEventListener("click", logMyId);

	allTheBadges.forEach(currentbadge => currentbadge.addEventListener("click", logMyId));
})();
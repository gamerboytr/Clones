(() => {
	const spinningLogo = document.querySelector(".spinningLogo");
	spinningLogo.style.display = "none";
	window.addEventListener("offline", () => (spinningLogo.style.display = ""));
	window.addEventListener("online", () => (spinningLogo.style.display = "none"));

	document.querySelector("#private-channels noscript").remove();
	for (let i = 0; i < 12; i++) {
		let r = Math.floor(Math.random() * 4);
		let a = document.createElement("a");
		a.className = "channel";
		a.innerHTML = `<div class="layout">
			<div class="avatar">
				<div class="avatarWrapper w-8 h-8">
					<svg width="40" height="32" viewBox="0 0 40 32">
						<foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
							<div class="avatarStack">
								<img src="dist/img/discord_pfp${r}.png" />
							</div>
						</foreignObject>
						<rect width="10" height="10" x="22" y="22" fill="hsl(214, 9.9%, 50.4%)" mask="url(#svg-mask-status-offline)" />
					</svg>
				</div>
			</div>
			<div class="content">
				<div class="nameAndDecorations">
					<div class="name">GamerboyTR</div>
				</div>
			</div>
		</div>`;
		document.querySelector("#private-channels .private-channels-splitter").after(a);
	}

	document.querySelector("#private-channels .private-channels-splitter + a").classList.add("selected");

	let lastUserProfile = document.querySelector("#private-channels .private-channels-splitter + a .avatar img").getAttribute("src");

	document.querySelectorAll(".user-area .user-options button").forEach((el) => {
		el.addEventListener("click", () => {
			//* Mute
			if (el.getAttribute("aria-label") === "Mute") {
				el.setAttribute("aria-label", "Unmute");
				el.querySelector("svg").innerHTML = `<path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor" />
				<path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor" />
				<path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor" />
				<path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="strikethrough-red" fill="currentColor" />`;
			} else if (el.getAttribute("aria-label") === "Unmute") {
				el.setAttribute("aria-label", "Mute");
				el.querySelector(
					"svg"
				).innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor" />
				<path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor" />`;
			}
			//* Deafen
			if (el.getAttribute("aria-label") === "Deafen") {
				el.setAttribute("aria-label", "Undeafen");
				if (document.querySelector(".user-area .user-options button[aria-label='Mute']")) document.querySelector(".user-area .user-options button[aria-label='Mute']").click();
				el.querySelector("svg").innerHTML = `<path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z" fill="currentColor" />
				<path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z" fill="currentColor" />
				<path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z" class="strikethrough-red" fill="currentColor" />`;
			} else if (el.getAttribute("aria-label") === "Undeafen") {
				el.setAttribute("aria-label", "Deafen");
				if (document.querySelector(".user-area .user-options button[aria-label='Unmute']")) document.querySelector(".user-area .user-options button[aria-label='Unmute']").click();
				el.querySelector(
					"svg"
				).innerHTML = `<path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor" />`;
			}
		});
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "F1") return window.open("https://github.com/gamerboytr");
	});

	let firstBotMessageLi = document.createElement("li");
	firstBotMessageLi.className = "chat-message";
	firstBotMessageLi.innerHTML = `<div class="message">
			<div class="contents">
				<img src="${lastUserProfile}" class="user-avatar" />
				<h2 class="header-message">
					<span class="message-author">
						<span class="username">GamerboyTR</span>
					</span>
					<span class="timestamp">
						<time>
							<i class="separator"> - </i>
							${new Date().getMonth() + 1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()}
						</time>
					</span>
				</h2>
				<div class="message-content">Discord Clone By GamerboyTR !</div>
			</div>
		</div>`;
	document.querySelector(".chat-content .message-container .message-content>.messages").prepend(firstBotMessageLi);
	document.getElementById("sendMessageInput").addEventListener("input", (e) => {
		if (!e.target.value.trim()) return e.target.parentNode.removeAttribute("style");
		let height = e.target.value.split("\n").length * 22 + 22;
		if (height > 299) return;
		if (e.target.value.match("\n")) e.target.parentNode.setAttribute("style", `height:${height}px!important`);
	});
	document.getElementById("sendMessageInput").addEventListener("keydown", (e) => {
		if (!e.target.value.trim()) return;
		if (e.shiftKey && e.key === "Enter") return;
		if (e.key === "Enter") {
			e.preventDefault();
			e.target.parentNode.removeAttribute("style");
			let message = document.createElement("li");
			message.className = "chat-message";
			message.innerHTML = `<div class="message">
					<div class="contents">
						<img src="dist/img/discord_pfp2.png" class="user-avatar" />
						<h2 class="header-message">
							<span class="message-author">
								<span class="username">???</span>
							</span>
							<span class="timestamp">
								<time>
									<i class="separator"> - </i>
									${new Date().getMonth() + 1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()}
								</time>
							</span>
						</h2>
						<div class="message-content">${e.target.value}</div>
					</div>
				</div>`;
			document.querySelector(".chat-content .message-container .message-content>.messages .scrollerSpacer").before(message);
			document.querySelector(".message-container").scrollTo(0, document.querySelector(".message-container").scrollHeight);
			e.target.value = "";
		}
	});
	document.querySelector(".user-area .name-tag").addEventListener("click", () => {
		navigator.clipboard.writeText(document.querySelector(".user-area .name-tag").innerText.replaceAll("\n", ""));
	});

	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

	document.getElementById("uploadFile").addEventListener("click", () => {
		window
			.showOpenFilePicker({
				types: [
					{
						description: "Images",
						accept: {
							"image/*": [".png", ".jpg", ".jpeg"],
						},
					},
				],
				excludeAcceptAllOption: true,
				multiple: false,
			})
			.then(async (file) => {
				let base64 = await toBase64(await file[0].getFile());
				let input = document.getElementById("sendMessageInput");
				let message = document.createElement("li");
				message.className = "chat-message";
				message.innerHTML = `<div class="message">
					<div class="contents">
						<img src="dist/img/discord_pfp2.png" class="user-avatar" />
						<h2 class="header-message">
							<span class="message-author">
								<span class="username">???</span>
							</span>
							<span class="timestamp">
								<time>
									<i class="separator"> - </i>
									${new Date().getMonth() + 1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()}
								</time>
							</span>
						</h2>
						<div class="message-content image-content">
							<img src="${base64}" />
						</div>
					</div>
				</div>`;
				document.querySelector(".chat-content .message-container .message-content>.messages .scrollerSpacer").before(message);
				document.querySelector(".message-container").scrollTo(0, document.querySelector(".message-container").scrollHeight);
				input.value = "";
			})
			.catch((err) => {
				if (err.toString().match("The user aborted a request.")) return;
				console.error(err);
			});
	});
})();

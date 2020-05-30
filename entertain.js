 let EntertainmentApi=
"http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c7bcab40fb6d4ad58373d265a6dd43de";





window
	.fetch(EntertainmentApi)
	.then(entertainmentData => {
		entertainmentData.json()
			.then(entertainment => {
				let entertainmentInfo = entertainment.articles;
				let firstentertainmentBlock = entertainment.articles;
				let ertainmentnewsBlockOne = firstentertainmentBlock[0];
				document.getElementById("entertainmentFirstTemplate").innerHTML = `
				<ul>
					
					<a href="${ertainmentnewsBlockOne.url}" target="_block">
						<li class="text-dark">${ertainmentnewsBlockOne.title}</li>
					</a>
				</ul>
				`;
				let output = [];
				for (let entertainments of entertainmentInfo) {
					//console.log(sport);
					output += `
					<ul class="list-group">							
						<a href="${entertainments.url}" target="_blank" >
							<li class="text-dark">${entertainments.title}</li>
						</a>
					</ul>	
					`;
					document.getElementById("entertainmentAllTemplate").innerHTML = output;
				}
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));
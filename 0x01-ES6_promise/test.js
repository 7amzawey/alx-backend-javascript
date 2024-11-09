let promise = new Promise((resolve, reject) => 
	{
		setTimeout(() => {
			resolve("Step 1 Complete")
		}, 1000);
	});
promise
	.then((message) => {
		console.log(message);
		return new Promise((resolve, reject) => 
			{
			setTimeout(() => {
				resolve("Step 2 complete")
			}, 1000);
			});
	})
	.then((message) => {
		console.log(message);
	});


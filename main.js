const users = [
		  {
			first_name: 'Mike',
			last_name: 'Sheridan'
		  },
		  {
			first_name: 'Tim',
			last_name: 'Lee'
		  },
		  {
			first_name: 'John',
			last_name: 'Carte'
		  }
		];

		const fullName = users.map(function(val){
			 return `${val.first_name} ${val.last_name}`;
			 });
			 
			 console.log(fullName);
let userList = []
let breedId = ``
const selectBreed = document.querySelector('.custom-select')
const userSubmit = document.getElementById('userSubmit')

selectBreed.addEventListener('change', (event) => {
	event.preventDefault()
	breedId = `&breed_id=${event.target.value}`
	console.log(breedId)
});

userSubmit.addEventListener('click', (event) => {
	event.preventDefault()
	let limit = document.getElementById('search-input').value
	if (limit < 0 || limit > 100 || limit == false) {
		showMessage('Please choose a number between 1 and 100', 'alert-danger')
	}
	else {
		searchCatApi(limit, breedId)
	}
})

const searchCatApi = function(limit, breed) {
	console.log('Starting fetch ....')
	fetch(`https://api.thecatapi.com/v1/images/search?size=med&format=Static’s&limit=${limit}${breed}`)
.then(response => response.json())
.then(data => {
	let output = '<div class="card-columns">'
	data.forEach(element => {
		if (userList.includes(element.id)) {
			return
		}
		else {
			userList.push(element.id)
			let image = element.url
			output += `
				<div class="card mb-2">
					<img class="card-img-top" src="${image}" alt="Card image cap">
				</div>`
		}
	})
	output += '</div>'
	document.getElementById('results').innerHTML = output;
	console.log(userList)
})

.catch(err => {
	console.log('Error')
	console.log(err)
})
}


// Show Message Function
function showMessage(message, className) {
	const div = document.createElement('div');
	div.className = `alert ${className}`;
	// Add text
	div.appendChild(document.createTextNode(message));
	// Get parent
	const searchContainer = document.getElementById('limit-container');
	// Get form
	const search = document.getElementById('searchLimit');
  
	// Insert alert
	searchContainer.insertBefore(div, search);
  
	// Timeout after 3 sec
	setTimeout(function() {
	  document.querySelector('.alert').remove();
	}, 3000);
  }
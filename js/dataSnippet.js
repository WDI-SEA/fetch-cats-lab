const breedArr = [{"breeds":[{"weight":{"imperial":"7 - 14","metric":"3 - 6"},"id":"esho","name":"Exotic Shorthair","cfa_url":"http://cfa.org/Breeds/BreedsCJ/Exotic.aspx","vetstreet_url":"http://www.vetstreet.com/cats/exotic-shorthair","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/exotic-shorthair","temperament":"Affectionate, Sweet, Loyal, Quiet, Peaceful","origin":"United States","country_codes":"US","country_code":"US","description":"The Exotic Shorthair is a gentle friendly cat that has the same personality as the Persian. They love having fun, don’t mind the company of other cats and dogs, also love to curl up for a sleep in a safe place. Exotics love their own people, but around strangers they are cautious at first. Given time, they usually warm up to visitors.","life_span":"12 - 15","indoor":0,"lap":1,"alt_names":"Exotic","adaptability":5,"affection_level":5,"child_friendly":3,"dog_friendly":3,"energy_level":3,"grooming":2,"health_issues":3,"intelligence":3,"shedding_level":2,"social_needs":4,"stranger_friendly":2,"vocalisation":1,"experimental":0,"hairless":0,"natural":0,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Exotic_Shorthair","hypoallergenic":0}],"id":"dTlqinfQA","url":"https://cdn2.thecatapi.com/images/dTlqinfQA.jpg","width":4000,"height":3000}]

console.log(breedArr[0]["breeds"][0]['name'])

// Look up breed info
/* const breedsApiURL = 'https://api.thecatapi.com/v1/breeds?'
const searchBreeds = function() {
	console.log('Starting fetch ....')
	fetch(breedsApiURL)
.then(response => response.json())
.then(data => {
	let list = []
	for (i=0; i<data.length; i++) {
	list.push({name: data[i].name, id: data[i].id})
	}
	console.log(list)
})
.catch(err => {
	console.log('Error')
	console.log(err)
})
}
searchBreeds() */

const breeds = [
{name: "Abyssinian", id: "abys"}, 
{name: "Aegean", id: "aege"},
{name: "American Bobtail", id: "abob"},
{name: "American Curl", id: "acur"},
{name: "American Shorthair", id: "asho"},
{name: "American Wirehair", id: "awir"},
{name: "Arabian Mau", id: "amau"},
{name: "Australian Mist", id: "amis"},
{name: "Balinese", id: "bali"},
{name: "Bambino", id: "bamb"},
{name: "Bengal", id: "beng"},
{name: "Birman", id: "birm"},
{name: "Bombay", id: "bomb"},
{name: "British Longhair", id: "bslo"},
{name: "British Shorthair", id: "bsho"},
{name: "Burmese", id: "bure"},
{name: "Burmilla", id: "buri"},
{name: "California Spangled", id: "cspa"},
{name: "Chantilly-Tiffany", id: "ctif"},
{name: "Chartreux", id: "char"},
{name: "Chausie", id: "chau"},
{name: "Cheetoh", id: "chee"},
{name: "Colorpoint Shorthair", id: "csho"},
{name: "Cornish Rex", id: "crex"},
{name: "Cymric", id: "cymr"},
{name: "Cyprus", id: "cypr"},
{name: "Devon Rex", id: "drex"},
{name: "Donskoy", id: "dons"},
{name: "Dragon Li", id: "lihu"},
{name: "Egyptian Mau", id: "emau"},
{name: "European Burmese", id: "ebur"},
{name: "Exotic Shorthair", id: "esho"},
{name: "Havana Brown", id: "hbro"},
{name: "Himalayan", id: "hima"},
{name: "Japanese Bobtail", id: "jbob"},
{name: "Javanese", id: "java"},
{name: "Khao Manee", id: "khao"},
{name: "Korat", id: "kora"},
{name: "Kurilian", id: "kuri"},
{name: "LaPerm", id: "lape"},
{name: "Maine Coon", id: "mcoo"},
{name: "Malayan", id: "mala"},
{name: "Manx", id: "manx"},
{name: "Munchkin", id: "munc"},
{name: "Nebelung", id: "nebe"},
{name: "Norwegian Forest Cat", id: "norw"},
{name: "Ocicat", id: "ocic"},
{name: "Oriental", id: "orie"},
{name: "Persian", id: "pers"},
{name: "Pixie-bob", id: "pixi"},
{name: "Ragamuffin", id: "raga"},
{name: "Ragdoll", id: "ragd"},
{name: "Russian Blue", id: "rblu"},
{name: "Savannah", id: "sava"},
{name: "Scottish Fold", id: "sfol"},
{name: "Selkirk Rex", id: "srex"},
{name: "Siamese", id: "siam"},
{name: "Siberian", id: "sibe"},
{name: "Singapura", id: "sing"},
{name: "Snowshoe", id: "snow"},
{name: "Somali", id: "soma"},
{name: "Sphynx", id: "sphy"},
{name: "Tonkinese", id: "tonk"},
{name: "Toyger", id: "toyg"},
{name: "Turkish Angora", id: "tang"},
{name: "Turkish Van", id: "tvan"},
{name: "York Chocolate", id: "ycho"}]

let breedChoice = (breeds.find(object => object.name === 'Bengal')).id
console.log(breedChoice)

let number = 1
let createBreedList = breeds.forEach(object => {

	console.log(`<option value=\"${object.id}\">${object.name}</option>`)
	number++
})

console.log(createBreedList)
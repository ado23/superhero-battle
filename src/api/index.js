const url = "https://www.superheroapi.com/api.php";
const key = "1759899007474589";

export function getCharacterById(characterId) {
  let requestUrl = `${url}/${key}/${characterId}`;
  return requestUrl;
}

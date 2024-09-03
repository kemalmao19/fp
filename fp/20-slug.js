// Only change code below this line
function urlSlug(title) {
  const arr = title.toLowerCase().split(/[\s\W]+/)
  const clean = arr.filter((x)=>x!=="")
  const slug = clean.join("-")
  console.log(slug)
  return slug
}
// Only change code above this line
urlSlug(" Winter Is  Coming");

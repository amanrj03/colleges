let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let collegeArr = await getColleges(country);
  show(collegeArr);
});

function show(clgs) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (clg of clgs) {
    let li = document.createElement("li");
    li.innerText = clg.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("error: ", e);
    return [];
  }
}

const express = require("express");
const cors = require("cors");
const runFollowersScraper =
  require("./scraper/followers");
const app = express();
const fs = require("fs");

function getUnfollows(oldList,newList){

return oldList.filter(
u=>!newList.includes(u)
);

}

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.get("/api/stats", (req, res) => {

  try {

    const followers =
      JSON.parse(
        fs.readFileSync(
          "./followers.json"
        )
      );

    res.json({
      followers: followers.length,
      unfollows: 0,
      newFollowers: 0
    });

  }

  catch {

    res.json({
      followers: 0,
      unfollows: 0,
      newFollowers: 0
    });

  }

});
app.listen(3001, () => {
  console.log("API corriendo puerto 3001");
});

app.post(
"/api/update",
async(req,res)=>{

try{

let oldFollowers=[];

if(
fs.existsSync("./followers.json")
){

oldFollowers=
JSON.parse(
fs.readFileSync(
"./followers.json"
)
);

}


const count=
await runFollowersScraper();


const newFollowers=
JSON.parse(
fs.readFileSync(
"./followers.json"
)
);


const unfollows=
getUnfollows(
oldFollowers,
newFollowers
);


res.json({
success:true,
followers:count,
unfollows
});

}
catch(err){

console.error(err);

res.status(500).json({
success:false
});

}

});
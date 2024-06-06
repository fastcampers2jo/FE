const express = require("express");
const cors = require("cors")
const app = express();


const table = [{
        name: "Jack",
        alias: "Monkey"
    },
    {
        name: "Shelly",
        alias: "Cat"
    },
    {
        name: "Toms",
        alias: "Dog"
    },
];


// "*" : 모든 브라우저 접근 가능 
// "credentials" : 사용자 인증이 필요한경우 작성해야한다.
app.use(cors({origin:"*", credentials:true}))

// 프론트에서 json으로 데이터 줄때
app.use(express.json());
// 프론트에서 form으로 데이터 줄때
app.use(express.urlencoded({ extended: true }));


// req 프론트에서 준 데이터
// res 프론트에 내보낼 데이터
// next 서버에서 나온 에러
app.get("/name", (req, res, next) => {
  try { 
    return res.status(200).json(table);
  } catch (error) {
    console.error("name", error);
    next(error);
  }
});

app.post("/name", (req, res, next) => {
    try {
        console.log(req);
        const item = req.body
        console.log(item);
    } catch (error) {
        console.error("name", error);
        next(error);
    }
});

app.listen(3001, () => {
    console.log("서버켜짐.")
});
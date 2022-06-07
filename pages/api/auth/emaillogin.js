import clientPromise from "../../../lib/mongodb";
import bcrypt from 'bcryptjs';



export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MyUsers");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const user = await db
        .collection("emailSignin")
        .find({ name : bodyObject.name })
        .toArray();

      if (user.length == 0) {
        let newUser = await db.collection("emailSignin").insertOne(bodyObject);
        return res.json({ result: "Successful" });
      }
      return res.json({ result : "Unsuccessful" });

    case "GET":
      const users = await db
        .collection("emailSignin")
        .find({
          name: req.query.name,
          email: req.query.email,
        })
        .toArray();
      
        
      if(bcrypt.compareSync(req.query.password, users[0].password))
      { res.json(users[0]); }
      else{
        return false
      }

      break;
  }
}

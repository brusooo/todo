import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MyUsers");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
    //   let bodyObject = JSON.parse(req.body);
    //   let newPost = await db.collection("emailSignin").insertOne(bodyObject);
    //   res.json({result : 'Successful'});
    //   break;
    case "GET":
      const users = await db
        .collection("emailSignin")
        .find({ username : req.query.username , email: req.query.email, password: req.query.password })
        .toArray();
      res.json({ signIn: users.length > 0 ? "successful" : "unsuccessful" });
      break;
  }
}

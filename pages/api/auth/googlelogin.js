import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MyUsers");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      //   let newPost = await db.collection("users").insertOne(bodyObject);
      //   res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db
        .collection("users")
        .find({ email: req.query.email })
        .toArray();
      res.json({ signIn: posts.length > 0 ? "successful" : "unsuccessful" });
      break;
  }
}

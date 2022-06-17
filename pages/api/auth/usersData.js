import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MyUsers");
  const usersData = db.collection("usersData");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const user = await usersData.find({ name: bodyObject.name }).toArray();


      if (user.length == 0) {
        let newUser = await usersData.insertOne(bodyObject);
      } else {
        const result = await usersData.updateOne(
          { name: bodyObject.name },
          { $set: { data: bodyObject.data } },
          { upsert: true }
      )
      }
      return res.json({ result: "Successful" });

    case "GET":
      const users = await usersData
        .find({
          user: req.query.name,
        })
        .toArray();

      return res.json({ users });
  }
}

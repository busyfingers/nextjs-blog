import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(async (req, res) => {
  try {
    console.log(req.method);
    res.send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);

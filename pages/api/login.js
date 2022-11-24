import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(async (req, res) => {
  const { username, password } = await req.body;

  try {
    // const {
    //   data: { login, avatar_url },
    // } = await octokit.rest.users.getByUsername({ username });

    if (username !== "haus" || password !== "life") {
      throw new Error("Invalid credentials");
    }

    const user = {
      isLoggedIn: true,
      userName: "haus",
      firstName: "Test",
      lastName: "Testsson",
    };
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);

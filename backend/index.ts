import { Sequelize } from "sequelize-typescript";
import Content from "./models/Content.model";
import User from "./models/User.model";
import { ContentStatus } from "./enums/ContentStatus.enum";
import express, { Request, Response } from "express";
import cors from "cors";
import { stat } from "fs";

const app = express();
const PORT = 4000;

const sequelize = new Sequelize("HFC", "root", "HFC2023", {
  host: "35.239.125.245",
  dialect: "mysql",
});

sequelize.addModels([User, Content]);

// Create table if not exists
sequelize.sync();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Get users route
app.get("/users", async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});

// View content for user
app.get(
  "/content/:userId",
  async (
    req: Request<{
      userId: number;
    }>,
    res: Response<
      {
        id: number;
        url: string;
        status: string;
        userId: number;
      }[]
    >
  ) => {
    const userId = req.params["userId"];

    const content = await Content.findAll({
      where: { userId },
      attributes: ['id', 'url', 'status', 'userId'],
    });

    res.json(content);
  }
);

// Update content status
// If the status is not valid, return 400 status code
// If the content does not exist, return 404 status code
// If the content is already approved, you can't change the status, return 400 status code
app.patch(
  "/content/:contentId/status",
  async (
    req: Request<{ contentId: number }, {}, { status: string }>,
    res: Response
  ) => {
    try {
      const contentId = req.params.contentId;
      const { status }: { status: string } = req.body;

      // Make sure we got a valid string for status
      if (!["pending", "approved", "rejected"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      const statusEnum: ContentStatus = status as ContentStatus;

      // Check if the content exists
      const content = await Content.findByPk(contentId);
      if (!content) {
        return res.status(404).json({ error: "Content not found" });
      }

      // Check if the content is already approved
      if (content.status === ContentStatus.APPROVED) {
        return res.status(400).json({ error: "Content is already approved. Status cannot be changed." });
      }

      // Update the content status and return the response
      content.status = statusEnum;
      await content.save();
      res.json(content);
    } catch (error) {
      // For debugging: if something else goes wrong, throw a 500 error
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

require("dotenv").config(); // Load .env file
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");
const os = require("os");
const ip = require("ip");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const port = 8080;
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("User connected");
  socket.emit("notification", {
    message: "Welcome User",
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Set up the view engine for rendering JSX
app.set("views", path.join(__dirname, "../Frontend/src/Components"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Define ticket schema with required fields
const ticketSchema = new mongoose.Schema({
  TicketNo: {
    type: String,
  },
  Date: {
    type: String,
  },
  Name: {
    type: String,
  },
  Department: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Category: {
    type: String,
  },
  Type: {
    type: String,
  },
  Priority: {
    type: String,
  },
  Description: {
    type: String,
  },
  DescriptionFile: {
    type: String,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

// Route to get all tickets
app.get("/api/Ticket", async (req, res, next) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    next(err);
  }
});

// Route to submit a new ticket
app.post("/submit", async (req, res, next) => {
  const {
    TicketNo,
    Date,
    Name,
    Department,
    Subject,
    Category,
    Type,
    Priority,
    Description,
    DescriptionFile,
  } = req.body;
  if (
    !TicketNo ||
    !Date ||
    !Name ||
    !Department ||
    !Subject ||
    !Category ||
    !Type ||
    !Priority ||
    !Description
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const newTicket = await Ticket.findOne({ TicketNo });
    if (!newTicket) {
      const StoreData = await Ticket.create({
        TicketNo,
        Date,
        Name,
        Department,
        Subject,
        Category,
        Type,
        Priority,
        Description,
        DescriptionFile,
      });
      console.log(StoreData);
      io.on("connection", (socket) => {
        console.log("User connected");
        socket.emit("notification", {
          message: "Ticket successfully submitted!",
        });
        socket.on("disconnect", () => {
          console.log("User disconnected");
        });
      });
      // io.emit("notification", { message: "Ticket successfully submitted!" });
      res.redirect("/MyTicket");
    } else {
      // Emit notification via Socket.IO
      io.on("connection", (socket) => {
        console.log("User connected");
        socket.emit("notification", {
          message: "This ticket number already exists!",
        });
        socket.on("disconnect", () => {
          console.log("User disconnected");
        });
      });
      // io.emit('notification', { message: 'This ticket number already exists!' });

      res.redirect("/Newticket");
    }
  } catch (err) {
    console.log(err);
    io.on("connection", (socket) => {
      console.log("User connected");
      socket.emit("notification", {
        message: "An error occurred while processing the ticket.",
      });
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
    // io.emit("notification", {
    //   message: "An error occurred while processing the ticket.",
    // });
    next(err);
  }
});

// Serve the home page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

// Function to get the IP address
function getIPAddress() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const interface of interfaces) {
      // Check for IPv4 and exclude internal (loopback) addresses
      if (interface.family === "IPv4" && !interface.internal) {
        return interface.address;
      }
    }
  }
  return "IP Address not found";
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("An unexpected error occurred.");
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Server running at http://${getIPAddress()}:${port}/`);
});

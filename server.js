import express from "express";
import connectionDB from "./databases/db.js";

import ProductsRoutes from "./routes/products.js";
import DoctorRoutes from "./routes/doctors.js";
import StudentRoutes from "./routes/students.js";
import UserRoutes from "./routes/users.js";
import CourseRoutes from "./routes/courses.js";
import BookRoutes from "./routes/books.js";
import EmployeeRoutes from "./routes/employees.js";
import VehicleRoutes from "./routes/vehicles.js";
import TeacherRoutes from "./routes/teachers.js";

const server = express();
server.use(express.json());

server.use("/api/products", ProductsRoutes);
server.use("/api/doctors", DoctorRoutes);
server.use("/api/students", StudentRoutes);
server.use("/api/users", UserRoutes);
server.use("/api/courses", CourseRoutes);
server.use("/api/books", BookRoutes);
server.use("/api/employees", EmployeeRoutes);
server.use("/api/vehicles", VehicleRoutes);
server.use("/api/teachers", TeacherRoutes);

const port = 5001;

const startServer = async () => {
  try {
    await connectionDB();
    server.listen(port, () => {
      console.log(`server started at port ${port}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exitCode = 1;
  }
};

startServer();